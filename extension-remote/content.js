console['log']('remote\x20content.js\x20loaded',new Date());var AVAILABLE_START_HOUR='';var AVAILABLE_END_HOUR='';var BUFFER_BEFORE_AND_AFTER_MINS='';var MEETING_LENGTH_MINS='';var HEADER_TEXT='';var POST_TEXT='';var INCLUDE_WEEKENDS=![];var SKIP_DAYS_WITH_ALL_DAY_EVENTS=![];var EXTENSION_REMOTE_URL='';var RECIPIENT_TIMEZONE_OFFSET_HOURS='';var RECIPIENT_TIMEZONE_OFFSET_MINS='';var UUID='';var REFERRAL_LINK='PS:\x20You\x20may\x20also\x20find\x20Calapp\x20useful\x20-\x20it\x20generated\x20my\x20above\x20availability\x20from\x20my\x20(and\x20my\x20colleagues\x27)\x20Google\x20Calendar\x20in\x201\x20click\x20without\x20requiring\x20any\x20permissions\x20-\x20here\x27s\x20your\x20free\x20copy:\x20https://shareavailability.com?';var MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];var DAYS=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];var DAYS_IN_MONTH_28=['Feb'];var DAYS_IN_MONTH_30=['Apr','Jun','Sep','Nov'];var MONTHS_REGEX=new RegExp('('+MONTHS['join']('|')+')');var DAYS_REGEX=new RegExp('('+DAYS['join']('|')+')');var REGEX_EXTRACT_URL_SET_DATE=/\/(\d\d\d\d)\/(\d\d?)\/(\d\d?)$/;var MAIN_DIV_ID='divOverlay';var ANIMATION_DIV_ID='animationDiv';var ALL_DAY_REGEX=new RegExp(/^[^\d]*$/);var outputRecipientTimezoneOffsetHours=0x0;var datesToSkip=[];var skipDate=function(_0x1e924a){return datesToSkip['indexOf'](_0x1e924a)!==-0x1;};var skipDayOfWeek=function(_0x41e949){return!INCLUDE_WEEKENDS&&(_0x41e949===DAYS[0x5]||_0x41e949===DAYS[0x6]);};let isMonthNextYear=![];let haveSeenThisMonthOrMonthAfterThisMonth=![];var isBeforeTodayAndIsToday=function(_0x4752fd,_0x179518){let _0x1a0822=new Date();let _0x20e52f=_0x1a0822['getDate']();let _0x50885f=_0x1a0822['getMonth']();let _0x4cab9d=getDateMonthDigits(_0x179518);if(_0x4cab9d>=_0x50885f){haveSeenThisMonthOrMonthAfterThisMonth=!![];}else if(haveSeenThisMonthOrMonthAfterThisMonth){isMonthNextYear=!![];}else if(_0x50885f===0xb&&_0x4cab9d===0x0){isMonthNextYear=!![];}let _0xed4933=!isMonthNextYear&&(_0x4752fd<_0x20e52f&&_0x4cab9d===_0x50885f||_0x4cab9d<_0x50885f);let _0x294918=_0x4752fd===_0x20e52f&&_0x4cab9d===_0x50885f;let _0x3a81b9=_0x1a0822['getHours']()+_0x1a0822['getMinutes']()/0x3c;let _0x981b65=_0x294918?Math['max'](AVAILABLE_START_HOUR-BUFFER_BEFORE_AND_AFTER_MINS/0x3c,_0x3a81b9):-0x1;let _0x507475=_0x294918&&_0x3a81b9>=AVAILABLE_END_HOUR;return{'isBeforeToday':_0xed4933,'ifTodayEndHourMustBeAfter':_0x981b65,'isTodayAndCurrentHourAfterEndHour':_0x507475};};var generateFreeTimesInDayString=function(_0x53ec70,_0xf851f5,_0x4f27bc,_0x3c02c8){let _0x197add='';let {isBeforeToday,ifTodayEndHourMustBeAfter,isTodayAndCurrentHourAfterEndHour}=isBeforeTodayAndIsToday(_0x53ec70,_0xf851f5);if(isBeforeToday||isTodayAndCurrentHourAfterEndHour){return _0x197add;}let _0x4fdb9f=MEETING_LENGTH_MINS/0x3c;let _0x54de65=BUFFER_BEFORE_AND_AFTER_MINS/0x3c;let _0x39f102=_0x4f27bc['sort']((_0x328cb8,_0x58c1e3)=>_0x328cb8-_0x58c1e3);let _0x1c42d8=_0x3c02c8['sort']((_0x36162b,_0x45792d)=>_0x36162b-_0x45792d);for(let _0xdcb972=0x0;_0xdcb972<_0x39f102['length'];_0xdcb972++){if(_0x39f102[_0xdcb972]<AVAILABLE_START_HOUR&&_0x1c42d8[_0xdcb972]<AVAILABLE_START_HOUR){_0x39f102['splice'](_0xdcb972,0x1);_0x1c42d8['splice'](_0xdcb972,0x1);}}let _0x1f72a6=_0x39f102[0x0]?_0x39f102[0x0]:0x63;let _0x2282d8=Math['min'](AVAILABLE_END_HOUR,_0x1f72a6-_0x54de65);let _0x4524c8=Math['max'](AVAILABLE_START_HOUR,ifTodayEndHourMustBeAfter+_0x54de65);if(_0x1f72a6>_0x4524c8&&_0x2282d8-_0x4fdb9f>=_0x4524c8&&_0x2282d8>ifTodayEndHourMustBeAfter){_0x197add=_0x197add+'\x20'+hoursTohhmm(_0x4524c8+outputRecipientTimezoneOffsetHours)+'\x20-\x20'+hoursTohhmm(_0x2282d8+outputRecipientTimezoneOffsetHours);}for(let _0x2e47af=0x1;_0x2e47af<_0x39f102['length'];_0x2e47af++){if(_0x39f102[_0x2e47af]>=AVAILABLE_START_HOUR&&_0x1c42d8[_0x2e47af-0x1]>AVAILABLE_START_HOUR){let _0x187057=_0x39f102[_0x2e47af]-_0x54de65;if(_0x187057>ifTodayEndHourMustBeAfter){let _0x3e0ccd=Math['max'](_0x1c42d8[_0x2e47af-0x1],ifTodayEndHourMustBeAfter)+_0x54de65;let _0x5b4764=_0x187057-_0x3e0ccd;let _0x12c60b=AVAILABLE_END_HOUR-_0x3e0ccd;if(_0x187057>_0x3e0ccd){if(_0x187057<=AVAILABLE_END_HOUR&&_0x5b4764>=_0x4fdb9f){let _0x1081a8=hoursTohhmm(_0x187057+outputRecipientTimezoneOffsetHours);let _0x294d8b=hoursTohhmm(_0x3e0ccd+outputRecipientTimezoneOffsetHours);_0x197add=_0x197add+(_0x197add?',\x20':'\x20')+_0x294d8b+'\x20-\x20'+_0x1081a8;}else if(_0x187057>AVAILABLE_END_HOUR&&_0x12c60b>=_0x4fdb9f){let _0x381aa6=hoursTohhmm(AVAILABLE_END_HOUR+outputRecipientTimezoneOffsetHours);let _0x15236b=hoursTohhmm(_0x3e0ccd+outputRecipientTimezoneOffsetHours);_0x197add=_0x197add+(_0x197add?',\x20':'\x20')+_0x15236b+'\x20-\x20'+_0x381aa6;}}}}}let _0x15974c=Math['max'](AVAILABLE_START_HOUR-BUFFER_BEFORE_AND_AFTER_MINS/0x3c,Math['max'](ifTodayEndHourMustBeAfter,Math['max']['apply'](null,_0x3c02c8)));if(_0x15974c!==-Infinity&&_0x15974c!==-0x1&&_0x15974c!==0x18&&_0x15974c+_0x4fdb9f+_0x54de65<=AVAILABLE_END_HOUR){_0x197add=_0x197add+(_0x197add?'\x20or':'')+'\x20after\x20'+hoursTohhmm(_0x15974c+_0x54de65+outputRecipientTimezoneOffsetHours);}return _0x197add;};function getDayOfWeekDigits(_0x26d909,_0x5ed30f){return DAYS[(DAYS['indexOf'](_0x26d909)+_0x5ed30f)%0x7];}function generateFreeAllDayString(_0x28ab24,_0x548ec2,_0x1222f1,_0x4527bf){let _0x2d6bda=getDayOfWeekDigits(_0x548ec2,_0x4527bf);let _0x2ed3ea='';if(!skipDayOfWeek(_0x2d6bda)){_0x2ed3ea=appendOutputDayString(hoursTohhmm(AVAILABLE_START_HOUR+outputRecipientTimezoneOffsetHours)+'\x20-\x20'+hoursTohhmm(AVAILABLE_END_HOUR+outputRecipientTimezoneOffsetHours),'',_0x2d6bda+'\x20'+_0x28ab24+'\x20'+_0x1222f1+'\x20',_0x2d6bda);}return _0x2ed3ea;}function getDateDayDigits(_0x24dd6b){return _0x24dd6b?parseInt(_0x24dd6b['replace'](/\D+/g,'')):-0x1;}function getDateMonthDigits(_0x1bddf7){return MONTHS['indexOf'](_0x1bddf7);}function getDateMonthString(_0x12826b){let _0x4b858a=_0x12826b['match'](MONTHS_REGEX);return _0x4b858a[0x0];}function getDateDayString(_0xbd1353){return _0xbd1353['match'](DAYS_REGEX)[0x0];}function hoursTohhmm(_0x46f591){const _0x2d9c21=_0x46f591<0x0?'-':'';let _0x24f5bb=Math['floor'](Math['abs'](_0x46f591));const _0x236710=Math['round'](Math['abs'](_0x46f591)*0x3c%0x3c);let _0x391ae4='pm';if(_0x24f5bb<0xc){if(_0x24f5bb===0x0){_0x24f5bb=0xc;}_0x391ae4='am';}else if(_0x24f5bb>0xc){_0x24f5bb=_0x24f5bb-0xc;}return _0x2d9c21+_0x24f5bb+':'+(_0x236710<0xa?'0':'')+_0x236710+_0x391ae4;}function parseTimeString(_0x10a8e4){let _0x2df3fd=_0x10a8e4['match'](/^([\d]+):?([\d]*)?([^\d]+)?$/);let _0x24e432=parseInt(_0x2df3fd[0x1]);let _0x2db62a=_0x2df3fd[0x2]?parseInt(_0x2df3fd[0x2]):0x0;let _0x18a08a=_0x2df3fd[0x3]?_0x2df3fd[0x3]:null;return{'hours':_0x24e432,'optionalMins':_0x2db62a,'optionalAmPm':_0x18a08a};}function generateTimeString(_0x3ffa3f,_0x651c81,_0x17b4a4){if(_0x3ffa3f!==0xc&&_0x17b4a4==='pm'||_0x3ffa3f===0xc&&_0x17b4a4==='am'){_0x3ffa3f=_0x3ffa3f+0xc;}return _0x3ffa3f+_0x651c81/0x3c;}function convertStringWithAmPmTo24Time(_0x281032,_0x533ec6){let {hours:startHours,optionalMins:startOptionalMins,optionalAmPm:startOptionalAmPm}=parseTimeString(_0x281032);let {hours:endHours,optionalMins:endOptionalMins,optionalAmPm:endOptionalAmPm}=parseTimeString(_0x533ec6);if(endOptionalAmPm&&!startOptionalAmPm){startOptionalAmPm=endOptionalAmPm;}let _0x2dc3aa=generateTimeString(startHours,startOptionalMins,startOptionalAmPm);return{'startTime':_0x2dc3aa,'endTime':generateTimeString(endHours,endOptionalMins,endOptionalAmPm)};}function blink(_0x897ffe,_0x531816){function _0x1cb041(){_0x897ffe['style']['visibility']='hidden';setTimeout(function(){_0x897ffe['style']['visibility']='visible';},_0x531816);_0x49e25d=setTimeout(function(){_0x1cb041();},_0x531816*0x2);_0x4a4e30=![];}var _0x49e25d,_0x4a4e30=!![];return{'start':function(){if(_0x4a4e30)_0x1cb041();},'stop':function(){clearTimeout(_0x49e25d);_0x4a4e30=!![];}};}function copyTextAreaToClipboardOnClick(){copyTextAreaToClipboard();}function copyTextAreaToClipboard(){let _0x29011b=document['getElementById']('copyToClipboard');_0x29011b['select']();if(document['execCommand']('copy')){if(blinking){blinking['stop']();}let _0x1b6e27=document['getElementById']('copyStatus');_0x1b6e27['textContent']='Copied\x20to\x20your\x20clipboard';setTimeout(function(){_0x1b6e27['textContent']='';},0x7d0);console['log']('Calapp\x20by\x20ShareAvailability.com\x20copied\x20text\x20to\x20clipboard');}else{blinking['start']();}}function removeMainDiv(){removeDiv(MAIN_DIV_ID);}function removeDiv(_0x290510){let _0x4db358=document['getElementById'](_0x290510);if(_0x4db358){document['body']['removeChild'](_0x4db358);}}let blinking;function displayOutputDiv(_0x1bedfd){removeDiv(MAIN_DIV_ID);let _0x7b686f='CalApp\x20by\x20ShareAvailability.com\x20generated\x20your\x20availability\x20from\x20visible\x20days\x20and\x20calendars\x20for\x20<span\x20style=\x22font-weight:\x20bold\x22>meetings\x20of\x20at\x20least\x20'+MEETING_LENGTH_MINS+'\x20minutes\x20between\x20'+hoursTohhmm(AVAILABLE_START_HOUR)+'\x20and\x20'+hoursTohhmm(AVAILABLE_END_HOUR)+(outputRecipientTimezoneOffsetHours!=null&&outputRecipientTimezoneOffsetHours!==0x0?'\x20with\x20recipient\x20timezone\x20output\x20offset\x20of\x20'+(Math['abs'](outputRecipientTimezoneOffsetHours)>=0x1?outputRecipientTimezoneOffsetHours+'\x20hours':outputRecipientTimezoneOffsetHours*0x3c+'\x20minutes'):'')+'\x20with\x20at\x20least\x20'+BUFFER_BEFORE_AND_AFTER_MINS+'\x20minutes\x20before\x20and\x20after\x20existing\x20meetings</span>.';let _0x409f35=document['createElement']('div');_0x409f35['innerHTML']='<h2>Edit\x20your\x20availability/message\x20then\x20copy\x20to\x20your\x20clipboard</h2><p>'+_0x7b686f+'</p>';_0x409f35['style']['width']='670px';_0x409f35['style']['height']='auto';_0x409f35['style']['position']='absolute';_0x409f35['style']['top']='20px';_0x409f35['style']['backgroundColor']='white';_0x409f35['style']['zIndex']='9999999';_0x409f35['style']['opacity']='0.95';_0x409f35['style']['left']='33%';_0x409f35['style']['padding']='20px';_0x409f35['style']['borderStyle']='dashed';_0x409f35['style']['borderWidth']='1px';_0x409f35['id']=MAIN_DIV_ID;let _0x305e80=document['createElement']('a');_0x305e80['innerHTML']='Change\x20default\x20availability\x20and\x20text';_0x305e80['href']=chrome['extension']['getURL']('options.html');_0x305e80['style']['textDecoration']='underline';_0x305e80['style']['cursor']='pointer';_0x409f35['appendChild'](_0x305e80);_0x409f35['appendChild'](document['createElement']('br'));let _0x643fbf=document['createElement']('span');_0x643fbf['innerHTML']='Close';_0x643fbf['addEventListener']('click',removeMainDiv,![]);_0x643fbf['style']['position']='absolute';_0x643fbf['style']['top']='15px';_0x643fbf['style']['right']='20px';_0x643fbf['style']['textDecoration']='underline';_0x643fbf['style']['cursor']='pointer';_0x409f35['appendChild'](_0x643fbf);let _0x183f90=document['createElement']('span');_0x183f90['id']='copyStatus';_0x183f90['style']['color']='red';_0x183f90['style']['fontSize']='larger';_0x183f90['style']['fontWeight']='bold';_0x183f90['style']['position']='absolute';_0x183f90['style']['top']='130px';_0x183f90['style']['right']='120px';_0x409f35['appendChild'](_0x183f90);let _0x2cf297=document['createElement']('button');_0x2cf297['addEventListener']('click',copyTextAreaToClipboardOnClick,![]);_0x2cf297['style']['position']='absolute';_0x2cf297['style']['right']='29px';_0x2cf297['style']['top']='121px';_0x2cf297['style']['cursor']='pointer';let _0x3b4037=document['createElement']('img');_0x3b4037['id']='copyToClipboardImage';_0x3b4037['src']=EXTENSION_REMOTE_URL+'copyToClipboard.svg';_0x3b4037['style']['width']='32px';_0x3b4037['style']['height']='32px';_0x2cf297['appendChild'](_0x3b4037);let _0x5cd3a2=document['createElement']('p');_0x5cd3a2['id']='copyToClipboardText';_0x5cd3a2['innerHTML']='Copy';_0x5cd3a2['style']['margin']='0';_0x2cf297['appendChild'](_0x5cd3a2);_0x409f35['appendChild'](_0x2cf297);_0x409f35['appendChild'](document['createElement']('br'));let _0x237c0f=document['createElement']('textarea');_0x237c0f['style']['marginTop']='4px';_0x237c0f['name']='post';_0x237c0f['maxLength']='5000';_0x237c0f['cols']='80';_0x237c0f['rows']='30';_0x237c0f['innerHTML']=_0x1bedfd;_0x237c0f['id']='copyToClipboard';_0x409f35['appendChild'](_0x237c0f);removeDiv(ANIMATION_DIV_ID);document['body']['appendChild'](_0x409f35);blinking=blink(document['getElementById']('copyToClipboardImage'),0x2ee);copyTextAreaToClipboard();}function trimLineBreaks(_0x1cbbca){return _0x1cbbca?_0x1cbbca['replace'](/^\s+|\s+$/g,''):_0x1cbbca;}let lastDayOfWeekNumber=-0x1;function appendOutputDayString(_0x5c8c85,_0x38597a,_0x3aa6c5,_0x304a3a){let _0x188fca=DAYS['indexOf'](_0x304a3a);if(_0x5c8c85!==''){_0x38597a=_0x38597a+(lastDayOfWeekNumber===-0x1?'\x0a':'')+'\x0a'+(_0x188fca<=lastDayOfWeekNumber?'\x0a':'')+_0x3aa6c5+_0x5c8c85;}else if(_0x188fca<=lastDayOfWeekNumber){_0x38597a='\x0a';}lastDayOfWeekNumber=_0x188fca;return _0x38597a;}let outputInBetweenDaysWithNoEvents=function(_0xc78988,_0x4a9dd0,_0xfc663e,_0x2118c0){let _0x18a601='';let _0x4df7c7=getDateMonthString(_0xc78988);let _0xdf6d4a=getDateDayDigits(_0xc78988);let _0x1dda53=0x0;if(_0x4df7c7!==_0x2118c0){let _0x1651e6=DAYS_IN_MONTH_28['indexOf'](_0x2118c0)!==-0x1?0x1c:DAYS_IN_MONTH_30['indexOf'](_0x2118c0)!==-0x1?0x1e:0x1f;while(_0x4a9dd0+_0x1dda53<_0x1651e6){_0x1dda53++;let {isBeforeToday,ifTodayEndHourMustBeAfter,isTodayAndCurrentHourAfterEndHour}=isBeforeTodayAndIsToday(_0x4a9dd0+_0x1dda53,_0x2118c0);if(!isBeforeToday&&!isTodayAndCurrentHourAfterEndHour){let _0x2c40fc=generateFreeAllDayString(_0x4a9dd0+_0x1dda53,_0xfc663e,_0x2118c0,_0x1dda53);_0x18a601=_0x18a601+_0x2c40fc;}}_0x4a9dd0=0x0;}while(_0xdf6d4a>_0x4a9dd0+0x1){_0x4a9dd0++;_0x1dda53++;let {isBeforeToday,ifTodayEndHourMustBeAfter,isTodayAndCurrentHourAfterEndHour}=isBeforeTodayAndIsToday(_0x4a9dd0,_0x2118c0);if(!isBeforeToday&&!isTodayAndCurrentHourAfterEndHour){let _0x363e0a=generateFreeAllDayString(_0x4a9dd0,_0xfc663e,_0x4df7c7,_0x1dda53);_0x18a601=_0x18a601+_0x363e0a;}}return _0x18a601;};let processNewDateEntry=function(_0x17b878,_0x46c741,_0x3f889c,_0x5ec3a){let _0xab094e='';if(_0x46c741!==null){let _0x4308f2=getDateDayDigits(_0x46c741);let _0x230b48=getDateMonthString(_0x46c741);let _0x97c901=getDateDayString(_0x46c741);_0xab094e=_0xab094e+outputInBetweenDaysWithNoEvents(_0x17b878,_0x4308f2,_0x97c901,_0x230b48);}let _0x5deed5=getDateDayDigits(_0x17b878);let _0x20dfc3=getDateMonthString(_0x17b878);let _0x476bd3=getDateDayString(_0x17b878);if(!skipDayOfWeek(_0x476bd3)&&!skipDate(_0x17b878)){let _0x1c5477=generateFreeTimesInDayString(_0x5deed5,_0x20dfc3,_0x3f889c,_0x5ec3a);const _0x22cf5b=_0x476bd3+'\x20'+_0x5deed5+'\x20'+_0x20dfc3;_0xab094e=appendOutputDayString(_0x1c5477,_0xab094e,_0x22cf5b,_0x476bd3);}return _0xab094e;};let getDateSetViaUrl=function(){let _0x58babd=REGEX_EXTRACT_URL_SET_DATE['exec'](window['location']['pathname']);let _0x155574;let _0x340152;let _0x34a6c1;if(_0x58babd&&_0x58babd['length']===0x4){_0x155574=_0x58babd[0x3];_0x340152=_0x58babd[0x2]-0x1;_0x34a6c1=_0x58babd[0x1];}return{'setViaUrlDayDigits':_0x155574,'setViaUrlMonthDigits':_0x340152,'setViaUrlYearDigits':_0x34a6c1};};var callbackRun=function(_0x3b3c3a){AVAILABLE_START_HOUR=parseFloat(_0x3b3c3a['AVAILABLE_START_HOUR']);AVAILABLE_END_HOUR=parseFloat(_0x3b3c3a['AVAILABLE_END_HOUR']);BUFFER_BEFORE_AND_AFTER_MINS=parseInt(_0x3b3c3a['BUFFER_BEFORE_AND_AFTER_MINS']);MEETING_LENGTH_MINS=parseInt(_0x3b3c3a['MEETING_LENGTH_MINS']);HEADER_TEXT=_0x3b3c3a['HEADER_TEXT'];POST_TEXT=_0x3b3c3a['POST_TEXT'];INCLUDE_WEEKENDS=_0x3b3c3a['INCLUDE_WEEKENDS'];SKIP_DAYS_WITH_ALL_DAY_EVENTS=_0x3b3c3a['SKIP_DAYS_WITH_ALL_DAY_EVENTS'];UUID=_0x3b3c3a['UUID'];EXTENSION_REMOTE_URL=_0x3b3c3a['EXTENSION_REMOTE_URL'];RECIPIENT_TIMEZONE_OFFSET_HOURS=parseInt(_0x3b3c3a['RECIPIENT_TIMEZONE_OFFSET_HOURS']);RECIPIENT_TIMEZONE_OFFSET_MINS=parseInt(_0x3b3c3a['RECIPIENT_TIMEZONE_OFFSET_MINS']);console['clear']();console['log']('Calapp\x20by\x20ShareAvailability.com\x20running\x20with\x20config',_0x3b3c3a);if(!isNaN(RECIPIENT_TIMEZONE_OFFSET_HOURS)||!isNaN(RECIPIENT_TIMEZONE_OFFSET_MINS)){console['log']('RECIPIENT_TIMEZONE_OFFSET_HOURS',RECIPIENT_TIMEZONE_OFFSET_HOURS);console['log']('RECIPIENT_TIMEZONE_OFFSET_MINS',RECIPIENT_TIMEZONE_OFFSET_MINS);outputRecipientTimezoneOffsetHours=(isNaN(RECIPIENT_TIMEZONE_OFFSET_HOURS)?0x0:RECIPIENT_TIMEZONE_OFFSET_HOURS)+(isNaN(RECIPIENT_TIMEZONE_OFFSET_MINS)?0x0:RECIPIENT_TIMEZONE_OFFSET_MINS)/0x3c;}console['log']('outputRecipientTimezoneOffsetHours',outputRecipientTimezoneOffsetHours);var _0x4ea16b='\x20–\x20';var _0x24e404=HEADER_TEXT;var _0x246659=null;var _0x292751=null;datesToSkip=[];var _0x4d3dfc=[];var _0x136ff4=[];var _0x35ca0a=document['evaluate']('//*[@class=\x27taTyDe\x27]',document,null,XPathResult['ORDERED_NODE_SNAPSHOT_TYPE'],null);for(let _0x7400ba=0x0;_0x7400ba<_0x35ca0a['snapshotLength'];_0x7400ba++){for(let _0x337afc=0x0;_0x337afc<_0x35ca0a['snapshotItem'](_0x7400ba)['childNodes']['length'];_0x337afc++){let _0x2fbed0=_0x35ca0a['snapshotItem'](_0x7400ba)['childNodes'][_0x337afc];let _0x3c55e8=_0x2fbed0['childNodes'][0x0]['childNodes'][0x0];if(_0x2fbed0['className']==='p8Qosf'){if(_0x246659!==null){if(_0x292751===null){let {setViaUrlDayDigits,setViaUrlMonthDigits,setViaUrlYearDigits}=getDateSetViaUrl();if(setViaUrlDayDigits){let _0x5f1859=getDateDayDigits(_0x246659);let _0x3eda3a=getDateMonthDigits(getDateMonthString(_0x246659));if(setViaUrlMonthDigits<_0x3eda3a||setViaUrlMonthDigits===_0x3eda3a&&setViaUrlDayDigits<_0x5f1859){let _0x2b56ad=new Date(MONTHS[setViaUrlMonthDigits]+'\x20'+setViaUrlDayDigits+',\x20'+setViaUrlYearDigits);_0x292751=_0x2b56ad['getDate']()+'\x20'+MONTHS[_0x2b56ad['getMonth']()]+',\x20'+DAYS[_0x2b56ad['getDay']()===0x0?0x6:_0x2b56ad['getDay']()-0x1];}}}let _0x409381=processNewDateEntry(_0x246659,_0x292751,_0x4d3dfc,_0x136ff4);_0x24e404=_0x24e404+(_0x24e404===HEADER_TEXT&&_0x409381?'\x0a\x0a'+trimLineBreaks(_0x409381):_0x409381);_0x4d3dfc=[];_0x136ff4=[];}_0x292751=_0x246659;_0x246659=_0x3c55e8['textContent']+'\x20'+_0x2fbed0['childNodes'][0x0]['childNodes'][0x1]['textContent'];}else if(SKIP_DAYS_WITH_ALL_DAY_EVENTS&&_0x3c55e8&&ALL_DAY_REGEX['test'](_0x3c55e8['textContent'])){if(datesToSkip['indexOf'](_0x246659)===-0x1){datesToSkip['push'](_0x246659);}}else if(_0x3c55e8&&_0x3c55e8['textContent']['indexOf'](_0x4ea16b)!==-0x1){let {startTime,endTime}=convertStringWithAmPmTo24Time(_0x3c55e8['textContent']['split'](_0x4ea16b)[0x0],_0x3c55e8['textContent']['split'](_0x4ea16b)[0x1]);if(startTime>endTime){startTime=startTime-0x18;}_0x4d3dfc['push'](startTime);_0x136ff4['push'](endTime);}}}if(_0x246659!==null){const _0x5b419c=getDateDayDigits(_0x246659);const _0x483d94=getDateMonthString(_0x246659);const _0x4e3dd4=getDateDayString(_0x246659);const _0x1abc9d=_0x4e3dd4+'\x20'+_0x5b419c+'\x20'+_0x483d94;_0x24e404=_0x24e404+processNewDateEntry(_0x1abc9d,_0x292751,_0x4d3dfc,_0x136ff4);}if(_0x24e404===HEADER_TEXT){const _0x60ff4='No\x20future\x20appointments\x20found\x20in\x20visible\x20days.\x20Try\x20changing\x20the\x20start\x20date\x20or\x20your\x20CalApp\x20appointment\x20options.';alert(_0x60ff4);}else{_0x24e404=trimLineBreaks(_0x24e404)+(POST_TEXT?'\x0a\x0a'+POST_TEXT:'')+'\x0a\x0a'+REFERRAL_LINK+UUID;displayOutputDiv(_0x24e404);console['log'](_0x24e404);}};var main=function(_0x490a9b,_0x1720e3){console['log']('Content\x20main()\x20called\x20by',_0x490a9b,'isShowLoader',_0x1720e3);chrome['storage']['sync']['get']({'AVAILABLE_START_HOUR':'','AVAILABLE_END_HOUR':'','BUFFER_BEFORE_AND_AFTER_MINS':'','MEETING_LENGTH_MINS':'','HEADER_TEXT':'','POST_TEXT':'','INCLUDE_WEEKENDS':![],'SKIP_DAYS_WITH_ALL_DAY_EVENTS':![],'UUID':'','EXTENSION_REMOTE_URL':'Error\x20EXTENSION_REMOTE_URL\x20not\x20set\x20in\x20local\x20storage','RECIPIENT_TIMEZONE_OFFSET_HOURS':'','RECIPIENT_TIMEZONE_OFFSET_MINS':''},function(_0x10c786){if(_0x1720e3){showLoader(_0x10c786['EXTENSION_REMOTE_URL']);setTimeout(function(){callbackRun(_0x10c786);},0xdac);}else{callbackRun(_0x10c786);}});};const showLoader=function(_0x2eeedc){var _0x419e47='loaderCss';if(!document['getElementById'](_0x419e47)){var _0x488201=document['getElementsByTagName']('head')[0x0];var _0x3ff9fb=document['createElement']('link');_0x3ff9fb['id']=_0x419e47;_0x3ff9fb['rel']='stylesheet';_0x3ff9fb['type']='text/css';_0x3ff9fb['href']=_0x2eeedc+'loader.css';_0x3ff9fb['media']='all';_0x488201['appendChild'](_0x3ff9fb);}let _0x3f5cfd=document['createElement']('div');_0x3f5cfd['id']=ANIMATION_DIV_ID;_0x3f5cfd['className']='container';let _0x3029c1=document['createElement']('div');_0x3029c1['className']='transparent';_0x3f5cfd['appendChild'](_0x3029c1);let _0x2f1443=document['createElement']('div');_0x2f1443['className']='loader';_0x3029c1['appendChild'](_0x2f1443);for(let _0x4cc8ff=0x0;_0x4cc8ff<0x6;_0x4cc8ff++){let _0x400d5c=document['createElement']('div');_0x400d5c['className']='loader--dot';_0x2f1443['appendChild'](_0x400d5c);}let _0x201795=document['createElement']('div');_0x201795['className']='loader--text';_0x2f1443['appendChild'](_0x201795);document['body']['appendChild'](_0x3f5cfd);};var initialized;if(typeof initialized==='undefined'){initialized=!![];chrome['runtime']['onMessage']['addListener'](function(_0x59ef14,_0x590389,_0x3ae630){main('chrome.runtime.onMessage\x20(Chrome\x20toolbar\x20button\x20clicked)',![]);});}var addEventListenerLoadCalled;window['addEventListener']('load',function(){if(typeof addEventListenerLoadCalled==='undefined'){addEventListenerLoadCalled=!![];main('window.addEventListener\x20load',!![]);}});