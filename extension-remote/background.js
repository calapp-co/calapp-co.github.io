// Need to click "Inspect views" on Extensions page "background view" to see console.log()

console.log('remote background.js loaded', new Date());

// See manifest.json which defines regex of URLs to auto execute content script.
// TODO also duplicated in options.js.
var RUN_WHEN_LOADED = 'calapp';

var AGENDA_VIEW = 'agenda';
var AGENDA_VIEW_RUN_WHEN_LOADED = AGENDA_VIEW + '?' + RUN_WHEN_LOADED;
var CALENDAR_ESCAPED_URL = 'https:\\/\\/calendar\\.google\\.com\\/calendar.*\\/r';
var CALENDAR_AGENDA_URL = CALENDAR_ESCAPED_URL.split('\\').join('').replace('.*', '') + '/' + AGENDA_VIEW_RUN_WHEN_LOADED;
//const CALENDAR_URL_REGEX = new RegExp(CALENDAR_ESCAPED_URL);
var AGENDA_URL_REGEX = new RegExp(CALENDAR_ESCAPED_URL + '/' + AGENDA_VIEW);


chrome.runtime.openOptionsPage();

chrome.browserAction.onClicked.addListener(function(tab) {

    //console.log('tab.url', tab.url);
    if (!tab.url) {

    //     // Blank tab => open agenda in this tab.
    //     chrome.tabs.update(tab.id, {url: CALENDAR_AGENDA_URL});

    // (requires <all_urls> permission).
    // } else if (CALENDAR_URL_REGEX.test(tab.url) !== true) {

        // Not on calendar as no permission to get tab URL => open new tab.
        chrome.tabs.create({url: CALENDAR_AGENDA_URL});

    } else if (tab.url && AGENDA_URL_REGEX.test(tab.url) !== true) {

        // On calendar, not agenda view => switch view.
        var calUrl = tab.url
            .replace('day', AGENDA_VIEW)
            .replace('week', AGENDA_VIEW)
            .replace('month', AGENDA_VIEW)
            .replace('year', AGENDA_VIEW)
            .replace('customday', AGENDA_VIEW);

        if (!calUrl.includes(AGENDA_VIEW)) {
            // Possible to land on view https://calendar.google.com/calendar/r?sf=true
            calUrl = calUrl.replace('/r', '/r/' + AGENDA_VIEW)
        }

        if (!calUrl.includes(RUN_WHEN_LOADED)) {
            if (calUrl.includes('?')) {
                calUrl = calUrl + '&' + RUN_WHEN_LOADED;
            } else {
                calUrl = calUrl + '?' + RUN_WHEN_LOADED;
            }
        }

        chrome.tabs.update(tab.id, {url: calUrl});

    } else {

        // On agenda page.
        chrome.tabs.executeScript(tab.id, {file: 'content.js'}, function() {
            chrome.tabs.sendMessage(tab.id, 'does not matter executes chrome.runtime.onMessage.addListener()');
        });

    }

});
