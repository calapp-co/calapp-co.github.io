console.log('remote options.js loaded', new Date());


function get_extension_remote_path() {

    const bases = document.getElementsByTagName('base');
    var baseHref = null;
    if (bases.length > 0) {
        baseHref = bases[0].href;
    }
    console.log('Setting EXTENSION_REMOTE_URL', baseHref);
    return baseHref;

}


function save_options(hideMessage = false) {

    chrome.storage.sync.set({

        AVAILABLE_START_HOUR: '' + (parseInt(document.getElementById('AVAILABLE_START_HOUR').value) + (document.getElementById('AVAILABLE_START_MINS').value / 60)),
        AVAILABLE_END_HOUR: '' + (parseInt(document.getElementById('AVAILABLE_END_HOUR').value) + (document.getElementById('AVAILABLE_END_MINS').value / 60)),
        BUFFER_BEFORE_AND_AFTER_MINS: document.getElementById('BUFFER_BEFORE_AND_AFTER_MINS').value,
        MEETING_LENGTH_MINS: document.getElementById('MEETING_LENGTH_MINS').value,
        HEADER_TEXT: document.getElementById('HEADER_TEXT').value,
        POST_TEXT: document.getElementById('POST_TEXT').value,
        INCLUDE_WEEKENDS: document.getElementById('INCLUDE_WEEKENDS').checked,
        UUID: document.getElementById('UUID').value,
        EXTENSION_REMOTE_URL: get_extension_remote_path(),

    }, function() {

        if (!hideMessage) {

            // Update status to let user know options were saved.
            Array.prototype.filter.call(document.getElementsByClassName('status'), function(status) {
                status.textContent = 'Options saved';
                setTimeout(function () {
                    status.textContent = '';
                }, 2000);
            });

        }

    });
}


function uuidv4() {
    return 'xxxxxxxx'.replace(/[x]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


function restore_options(hideMessage = false) {

    chrome.storage.sync.get({

        // TODO defaults duplicated in content.js and options.js.
        // TODO auto include MEETING_LENGTH_MINS value in HEADER_TEXT.
        AVAILABLE_START_HOUR: '9',
        AVAILABLE_END_HOUR: '17.5',
        BUFFER_BEFORE_AND_AFTER_MINS: '10',
        MEETING_LENGTH_MINS: '30',
        HEADER_TEXT: "Hi \n\nI'm available:", // "for up to MEETING_LENGTH_MINS mins:"
        POST_TEXT: "Please let me know which is convenient for you or send me a calendar invite?\n\nThanks",
        INCLUDE_WEEKENDS: false,
        UUID: uuidv4(),
        EXTENSION_REMOTE_URL: get_extension_remote_path(),

    }, function(items) {

        console.log('Config loaded', items);

        document.getElementById('AVAILABLE_START_HOUR').value = parseInt(items['AVAILABLE_START_HOUR']) < 10 ? '0' + parseInt(items['AVAILABLE_START_HOUR']) : parseInt(items['AVAILABLE_START_HOUR']);
        document.getElementById('AVAILABLE_START_MINS').value = calcMin(items['AVAILABLE_START_HOUR']);
        document.getElementById('AVAILABLE_END_HOUR').value = parseInt(items['AVAILABLE_END_HOUR']) < 10 ? '0' + parseInt(items['AVAILABLE_END_HOUR']) : parseInt(items['AVAILABLE_END_HOUR']);
        document.getElementById('AVAILABLE_END_MINS').value = calcMin(items['AVAILABLE_END_HOUR']);
        document.getElementById('BUFFER_BEFORE_AND_AFTER_MINS').value = items['BUFFER_BEFORE_AND_AFTER_MINS'];
        document.getElementById('MEETING_LENGTH_MINS').value = items['MEETING_LENGTH_MINS'];
        document.getElementById('HEADER_TEXT').value = items['HEADER_TEXT'];
        document.getElementById('POST_TEXT').value = items['POST_TEXT'];
        document.getElementById('INCLUDE_WEEKENDS').checked = items['INCLUDE_WEEKENDS'];
        document.getElementById('UUID').value = items['UUID'] ? items['UUID'] : uuidv4();

        save_options(hideMessage);

    });
}


function calcMin(hour) {

    let startMin = Math.round((Math.abs(hour) * 60.0) % 60.0);
    return startMin < 10 ? '0' + startMin : startMin;

}


function reset() {

    chrome.storage.sync.clear();

    // Persist UUID.
    chrome.storage.sync.set({

        UUID: document.getElementById('UUID').value,

    }, function() {

    });

    restore_options();

}

function selectTextArea(textAreaId) {
    document.getElementById(textAreaId).focus();
}



function includeHTML() {

    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");

    var elementFound = false;
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            elementFound = true;
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status === 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML(true);
                }
            };

            xhttp.open("GET", '' + file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }

    if (!elementFound) {

        console.log('No more w3-include-html elements to replace');

        // Restore then save to generate UUID;
        //document.addEventListener('DOMContentLoaded', () => {
            restore_options(true);
        //});

        Array.prototype.filter.call(document.getElementsByClassName('save'), function (save_button) {
            save_button.addEventListener('click', () => {
                save_options();
                restore_options();
            });
        });

        document.getElementById('reset').addEventListener('click', (e) => {
            e.preventDefault();
            reset();
        });

        document.getElementById('editHeaderText').addEventListener('click', () => {
            selectTextArea('HEADER_TEXT');
        });
        document.getElementById('editPostText').addEventListener('click', () => {
            selectTextArea('POST_TEXT');
        });

        selectTextArea('HEADER_TEXT');

    }


}


includeHTML();
