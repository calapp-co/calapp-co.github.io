console['log']('remote\x20content.js\x20loaded',new Date());var OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS=0x0;var AVAILABLE_START_HOUR='';var AVAILABLE_END_HOUR='';var BUFFER_BEFORE_AND_AFTER_MINS='';var MEETING_LENGTH_MINS='';var HEADER_TEXT='';var POST_TEXT='';var INCLUDE_WEEKENDS=![];var SKIP_DAYS_WITH_ALL_DAY_EVENTS=![];var EXTENSION_REMOTE_URL='';var UUID='';var REFERRAL_LINK='PS:\x20You\x20may\x20also\x20find\x20Calapp\x20useful\x20-\x20it\x20generated\x20my\x20above\x20availability\x20from\x20my\x20(and\x20my\x20colleagues\x27)\x20Google\x20Calendar\x20in\x201\x20click\x20without\x20requiring\x20any\x20permissions\x20-\x20here\x27s\x20your\x20free\x20copy:\x20https://shareavailability.com?';var MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];var DAYS=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];var DAYS_IN_MONTH_28=['Feb'];var DAYS_IN_MONTH_30=['Apr','Jun','Sep','Nov'];var MONTHS_REGEX=new RegExp('('+MONTHS['join']('|')+')');var DAYS_REGEX=new RegExp('('+DAYS['join']('|')+')');var REGEX_EXTRACT_URL_SET_DATE=/\/(\d\d\d\d)\/(\d\d?)\/(\d\d?)$/;var MAIN_DIV_ID='divOverlay';var ANIMATION_DIV_ID='animationDiv';var ALL_DAY_REGEX=new RegExp(/^[^\d]*$/);var datesToSkip=[];var skipDate=function(_0x75927d){return datesToSkip['indexOf'](_0x75927d)!==-0x1;};var skipDayOfWeek=function(_0xb5c096){return!INCLUDE_WEEKENDS&&(_0xb5c096===DAYS[0x5]||_0xb5c096===DAYS[0x6]);};let isMonthNextYear=![];let haveSeenThisMonthOrMonthAfterThisMonth=![];var isBeforeTodayAndIsToday=function(_0x15b5f3,_0x2d62b0){let _0x1c48a8=new Date();let _0x117559=_0x1c48a8['getDate']();let _0x4f79a5=_0x1c48a8['getMonth']();let _0x4801eb=getDateMonthDigits(_0x2d62b0);if(_0x4801eb>=_0x4f79a5){haveSeenThisMonthOrMonthAfterThisMonth=!![];}else if(haveSeenThisMonthOrMonthAfterThisMonth){isMonthNextYear=!![];}else if(_0x4f79a5===0xb&&_0x4801eb===0x0){isMonthNextYear=!![];}let _0x2af1a9=!isMonthNextYear&&(_0x15b5f3<_0x117559&&_0x4801eb===_0x4f79a5||_0x4801eb<_0x4f79a5);let _0xbbbf2d=_0x15b5f3===_0x117559&&_0x4801eb===_0x4f79a5;let _0x17fb62=_0x1c48a8['getHours']()+_0x1c48a8['getMinutes']()/0x3c;let _0x19e6e0=_0xbbbf2d?_0x17fb62:-0x1;let _0x454113=_0xbbbf2d&&_0x17fb62>=AVAILABLE_END_HOUR;return{'isBeforeToday':_0x2af1a9,'ifTodayEndHourMustBeAfter':_0x19e6e0,'isTodayAndCurrentHourAfterEndHour':_0x454113};};var generateFreeTimesInDayString=function(_0x374ba,_0x1dfc02,_0x25a024,_0x1d9765){let _0x574af0='';let {isBeforeToday,ifTodayEndHourMustBeAfter,isTodayAndCurrentHourAfterEndHour}=isBeforeTodayAndIsToday(_0x374ba,_0x1dfc02);if(isBeforeToday||isTodayAndCurrentHourAfterEndHour){return _0x574af0;}let _0xd4d771=MEETING_LENGTH_MINS/0x3c;let _0x3ff9c9=BUFFER_BEFORE_AND_AFTER_MINS/0x3c;let _0x28af5f=_0x25a024['sort']((_0xde9a39,_0x1ecc33)=>_0xde9a39-_0x1ecc33);let _0x4a35bc=_0x1d9765['sort']((_0x449115,_0x20911f)=>_0x449115-_0x20911f);for(let _0x2c6e12=0x0;_0x2c6e12<_0x28af5f['length'];_0x2c6e12++){if(_0x28af5f[_0x2c6e12]<AVAILABLE_START_HOUR&&_0x4a35bc[_0x2c6e12]<AVAILABLE_START_HOUR){_0x28af5f['splice'](_0x2c6e12,0x1);_0x4a35bc['splice'](_0x2c6e12,0x1);}}let _0x1e3081=_0x28af5f[0x0]?_0x28af5f[0x0]:0x63;let _0x380dcb=Math['min'](AVAILABLE_END_HOUR,_0x1e3081-_0x3ff9c9);let _0x2a0e02=Math['max'](AVAILABLE_START_HOUR,ifTodayEndHourMustBeAfter+_0x3ff9c9);if(_0x1e3081>_0x2a0e02&&_0x380dcb-_0xd4d771>=_0x2a0e02&&_0x380dcb>ifTodayEndHourMustBeAfter){_0x574af0=_0x574af0+'\x20'+hoursTohhmm(_0x2a0e02+OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS)+'\x20-\x20'+hoursTohhmm(_0x380dcb+OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS);}for(let _0x41ae27=0x1;_0x41ae27<_0x28af5f['length'];_0x41ae27++){if(_0x28af5f[_0x41ae27]>=AVAILABLE_START_HOUR&&_0x4a35bc[_0x41ae27-0x1]>AVAILABLE_START_HOUR){let _0x405a04=_0x28af5f[_0x41ae27]-_0x3ff9c9;if(_0x405a04>ifTodayEndHourMustBeAfter){let _0x5e3172=Math['max'](_0x4a35bc[_0x41ae27-0x1],ifTodayEndHourMustBeAfter)+_0x3ff9c9;let _0x1c58a3=_0x405a04-_0x5e3172;let _0x43fd9f=AVAILABLE_END_HOUR-_0x5e3172;if(_0x405a04>_0x5e3172){if(_0x405a04<=AVAILABLE_END_HOUR&&_0x1c58a3>=_0xd4d771){let _0x269ac6=hoursTohhmm(_0x405a04+OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS);let _0x10695f=hoursTohhmm(_0x5e3172+OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS);_0x574af0=_0x574af0+(_0x574af0?',\x20':'\x20')+_0x10695f+'\x20-\x20'+_0x269ac6;}else if(_0x405a04>AVAILABLE_END_HOUR&&_0x43fd9f>=_0xd4d771){let _0xbb0e28=hoursTohhmm(AVAILABLE_END_HOUR+OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS);let _0x5c63da=hoursTohhmm(_0x5e3172+OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS);_0x574af0=_0x574af0+(_0x574af0?',\x20':'\x20')+_0x5c63da+'\x20-\x20'+_0xbb0e28;}}}}}let _0x38d001=Math['max'](ifTodayEndHourMustBeAfter,Math['max']['apply'](null,_0x1d9765));if(_0x38d001!==-Infinity&&_0x38d001!==-0x1&&_0x38d001!==0x18&&_0x38d001+_0xd4d771+_0x3ff9c9<=AVAILABLE_END_HOUR){_0x574af0=_0x574af0+(_0x574af0?'\x20or':'')+'\x20after\x20'+hoursTohhmm(_0x38d001+_0x3ff9c9+OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS);}return _0x574af0;};function getDayOfWeekDigits(_0x526744,_0x11ced1){return DAYS[(DAYS['indexOf'](_0x526744)+_0x11ced1)%0x7];}function generateFreeAllDayString(_0x14a1f3,_0x446a9,_0x9d6589,_0x2b6049){let _0x32aa34=getDayOfWeekDigits(_0x446a9,_0x2b6049);let _0x9877c0='';if(!skipDayOfWeek(_0x32aa34)){_0x9877c0=appendOutputDayString(hoursTohhmm(AVAILABLE_START_HOUR+OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS)+'\x20-\x20'+hoursTohhmm(AVAILABLE_END_HOUR+OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS),'',_0x14a1f3+'\x20'+_0x9d6589+',\x20'+_0x32aa34+'\x20',_0x32aa34);}return _0x9877c0;}function getDateDayDigits(_0x25ff06){return _0x25ff06?parseInt(_0x25ff06['replace'](/\D+/g,'')):-0x1;}function getDateMonthDigits(_0x23c6be){return MONTHS['indexOf'](_0x23c6be);}function getDateMonthString(_0x53eb36){let _0x2663fb=_0x53eb36['match'](MONTHS_REGEX);return _0x2663fb[0x0];}function getDateDayString(_0x59bbb1){return _0x59bbb1['match'](DAYS_REGEX)[0x0];}function hoursTohhmm(_0x3bfacd){var _0x1dded2=_0x3bfacd<0x0?'-':'';var _0x20ec59=Math['floor'](Math['abs'](_0x3bfacd));var _0x3e7b21=Math['round'](Math['abs'](_0x3bfacd)*0x3c%0x3c);return _0x1dded2+(_0x20ec59<0xa?'0':'')+_0x20ec59+':'+(_0x3e7b21<0xa?'0':'')+_0x3e7b21;}function parseTimeString(_0xcc3384){let _0x28078=_0xcc3384['match'](/^([\d]+):?([\d]*)?([^\d]+)?$/);let _0x11716f=parseInt(_0x28078[0x1]);let _0x4df4bb=_0x28078[0x2]?parseInt(_0x28078[0x2]):0x0;let _0x187a84=_0x28078[0x3]?_0x28078[0x3]:null;return{'hours':_0x11716f,'optionalMins':_0x4df4bb,'optionalAmPm':_0x187a84};}function generateTimeString(_0x1bc278,_0x2edb5c,_0x3e4fe4){if(_0x1bc278!==0xc&&_0x3e4fe4==='pm'||_0x1bc278===0xc&&_0x3e4fe4==='am'){_0x1bc278=_0x1bc278+0xc;}return _0x1bc278+_0x2edb5c/0x3c;}function convertStringWithAmPmTo24Time(_0x913127,_0x13f5be){let {hours:startHours,optionalMins:startOptionalMins,optionalAmPm:startOptionalAmPm}=parseTimeString(_0x913127);let {hours:endHours,optionalMins:endOptionalMins,optionalAmPm:endOptionalAmPm}=parseTimeString(_0x13f5be);if(endOptionalAmPm&&!startOptionalAmPm){startOptionalAmPm=endOptionalAmPm;}let _0x2d547b=generateTimeString(startHours,startOptionalMins,startOptionalAmPm);return{'startTime':_0x2d547b,'endTime':generateTimeString(endHours,endOptionalMins,endOptionalAmPm)};}function blink(_0x341315,_0x47a09c){function _0x4f540e(){_0x341315['style']['visibility']='hidden';setTimeout(function(){_0x341315['style']['visibility']='visible';},_0x47a09c);_0x113c8d=setTimeout(function(){_0x4f540e();},_0x47a09c*0x2);_0x289251=![];}var _0x113c8d,_0x289251=!![];return{'start':function(){if(_0x289251)_0x4f540e();},'stop':function(){clearTimeout(_0x113c8d);_0x289251=!![];}};}function copyTextAreaToClipboardOnClick(){copyTextAreaToClipboard();}function copyTextAreaToClipboard(){let _0x3d07d5=document['getElementById']('copyToClipboard');_0x3d07d5['select']();if(document['execCommand']('copy')){if(blinking){blinking['stop']();}let _0x26068d=document['getElementById']('copyStatus');_0x26068d['textContent']='Copied\x20to\x20your\x20clipboard';setTimeout(function(){_0x26068d['textContent']='';},0x7d0);console['log']('Calapp\x20by\x20ShareAvailability.com\x20copied\x20text\x20to\x20clipboard');}else{blinking['start']();}}function removeMainDiv(){removeDiv(MAIN_DIV_ID);}function removeDiv(_0x827836){let _0x3e81ec=document['getElementById'](_0x827836);if(_0x3e81ec){document['body']['removeChild'](_0x3e81ec);}}let blinking;function displayOutputDiv(_0x272d3f){removeDiv(MAIN_DIV_ID);let _0xd1ab1c='CalApp\x20by\x20ShareAvailability.com\x20generated\x20your\x20availability\x20from\x20visible\x20days\x20for\x20meetings\x20of\x20at\x20least\x20'+MEETING_LENGTH_MINS+'\x20minutes\x20between\x20'+hoursTohhmm(AVAILABLE_START_HOUR)+'\x20and\x20'+hoursTohhmm(AVAILABLE_END_HOUR)+(OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS!=null&&OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS!==0x0?'\x20with\x20recipient\x20timezone\x20output\x20offset\x20of\x20'+(Math['abs'](OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS)>=0x1?OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS+'\x20hours':OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS*0x3c+'\x20minutes'):'')+'\x20with\x20at\x20least\x20'+BUFFER_BEFORE_AND_AFTER_MINS+'\x20minutes\x20before\x20and\x20after\x20existing\x20meetings\x20(based\x20on\x20currently\x20visible\x20days\x20and\x20calendars).';let _0x1b5906=document['createElement']('div');_0x1b5906['innerHTML']='<h2>Edit\x20your\x20availability/message\x20then\x20copy\x20to\x20your\x20clipboard</h2><p\x20style=\x22font-weight:\x20bold\x22>'+_0xd1ab1c+'</p>';_0x1b5906['style']['width']='670px';_0x1b5906['style']['height']='auto';_0x1b5906['style']['position']='absolute';_0x1b5906['style']['top']='20px';_0x1b5906['style']['backgroundColor']='white';_0x1b5906['style']['zIndex']='9999999';_0x1b5906['style']['opacity']='0.95';_0x1b5906['style']['left']='33%';_0x1b5906['style']['padding']='20px';_0x1b5906['style']['borderStyle']='dashed';_0x1b5906['style']['borderWidth']='1px';_0x1b5906['id']=MAIN_DIV_ID;let _0x2b8050=document['createElement']('a');_0x2b8050['innerHTML']='Change\x20default\x20availability\x20and\x20text';_0x2b8050['href']=chrome['extension']['getURL']('options.html');_0x2b8050['style']['textDecoration']='underline';_0x2b8050['style']['cursor']='pointer';_0x1b5906['appendChild'](_0x2b8050);_0x1b5906['appendChild'](document['createElement']('br'));let _0x1d1aed=document['createElement']('span');_0x1d1aed['innerHTML']='Close';_0x1d1aed['addEventListener']('click',removeMainDiv,![]);_0x1d1aed['style']['position']='absolute';_0x1d1aed['style']['top']='15px';_0x1d1aed['style']['right']='20px';_0x1d1aed['style']['textDecoration']='underline';_0x1d1aed['style']['cursor']='pointer';_0x1b5906['appendChild'](_0x1d1aed);let _0x3e072c=document['createElement']('span');_0x3e072c['id']='copyStatus';_0x3e072c['style']['color']='red';_0x3e072c['style']['fontSize']='larger';_0x3e072c['style']['fontWeight']='bold';_0x3e072c['style']['position']='absolute';_0x3e072c['style']['top']='130px';_0x3e072c['style']['right']='120px';_0x1b5906['appendChild'](_0x3e072c);let _0x19b389=document['createElement']('button');_0x19b389['addEventListener']('click',copyTextAreaToClipboardOnClick,![]);_0x19b389['style']['position']='absolute';_0x19b389['style']['right']='29px';_0x19b389['style']['top']='121px';_0x19b389['style']['cursor']='pointer';let _0x469cc7=document['createElement']('img');_0x469cc7['id']='copyToClipboardImage';_0x469cc7['src']=EXTENSION_REMOTE_URL+'copyToClipboard.svg';_0x469cc7['style']['width']='32px';_0x469cc7['style']['height']='32px';_0x19b389['appendChild'](_0x469cc7);let _0x5003b7=document['createElement']('p');_0x5003b7['id']='copyToClipboardText';_0x5003b7['innerHTML']='Copy';_0x5003b7['style']['margin']='0';_0x19b389['appendChild'](_0x5003b7);_0x1b5906['appendChild'](_0x19b389);_0x1b5906['appendChild'](document['createElement']('br'));let _0x3f9702=document['createElement']('textarea');_0x3f9702['style']['marginTop']='4px';_0x3f9702['name']='post';_0x3f9702['maxLength']='5000';_0x3f9702['cols']='80';_0x3f9702['rows']='30';_0x3f9702['innerHTML']=_0x272d3f;_0x3f9702['id']='copyToClipboard';_0x1b5906['appendChild'](_0x3f9702);removeDiv(ANIMATION_DIV_ID);document['body']['appendChild'](_0x1b5906);blinking=blink(document['getElementById']('copyToClipboardImage'),0x2ee);copyTextAreaToClipboard();}function trimLineBreaks(_0x33044f){return _0x33044f?_0x33044f['replace'](/^\s+|\s+$/g,''):_0x33044f;}let lastDayOfWeekNumber=-0x1;function appendOutputDayString(_0x4455c2,_0x4de627,_0x17807e,_0x45b276){let _0x206755=DAYS['indexOf'](_0x45b276);if(_0x4455c2!==''){_0x4de627=_0x4de627+(lastDayOfWeekNumber===-0x1?'\x0a':'')+'\x0a'+(_0x206755<=lastDayOfWeekNumber?'\x0a':'')+_0x17807e+_0x4455c2;}else if(_0x206755<=lastDayOfWeekNumber){_0x4de627='\x0a';}lastDayOfWeekNumber=_0x206755;return _0x4de627;}let outputInBetweenDaysWithNoEvents=function(_0x22ec7a,_0x4381f5,_0xbeb5b0,_0x4cf527){let _0x25738a='';let _0x273a16=getDateMonthString(_0x22ec7a);let _0x2fec6f=getDateDayDigits(_0x22ec7a);let _0x3d0bff=0x0;if(_0x273a16!==_0x4cf527){let _0x254516=DAYS_IN_MONTH_28['indexOf'](_0x4cf527)!==-0x1?0x1c:DAYS_IN_MONTH_30['indexOf'](_0x4cf527)!==-0x1?0x1e:0x1f;while(_0x4381f5+_0x3d0bff<_0x254516){_0x3d0bff++;let {isBeforeToday,ifTodayEndHourMustBeAfter,isTodayAndCurrentHourAfterEndHour}=isBeforeTodayAndIsToday(_0x4381f5+_0x3d0bff,_0x4cf527);if(!isBeforeToday&&!isTodayAndCurrentHourAfterEndHour){let _0x4546f7=generateFreeAllDayString(_0x4381f5+_0x3d0bff,_0xbeb5b0,_0x4cf527,_0x3d0bff);_0x25738a=_0x25738a+_0x4546f7;}}_0x4381f5=0x0;}while(_0x2fec6f>_0x4381f5+0x1){_0x4381f5++;_0x3d0bff++;let {isBeforeToday,ifTodayEndHourMustBeAfter,isTodayAndCurrentHourAfterEndHour}=isBeforeTodayAndIsToday(_0x4381f5,_0x4cf527);if(!isBeforeToday&&!isTodayAndCurrentHourAfterEndHour){let _0x27221b=generateFreeAllDayString(_0x4381f5,_0xbeb5b0,_0x273a16,_0x3d0bff);_0x25738a=_0x25738a+_0x27221b;}}return _0x25738a;};let processNewDateEntry=function(_0x1138d0,_0x1c500e,_0x410b3f,_0x2126cf){let _0x4a3c40='';if(_0x1c500e!==null){let _0x4f8c31=getDateDayDigits(_0x1c500e);let _0x262085=getDateMonthString(_0x1c500e);let _0x384620=getDateDayString(_0x1c500e);_0x4a3c40=_0x4a3c40+outputInBetweenDaysWithNoEvents(_0x1138d0,_0x4f8c31,_0x384620,_0x262085);}let _0x42f76c=getDateDayDigits(_0x1138d0);let _0x14aa14=getDateMonthString(_0x1138d0);let _0x13cdf0=getDateDayString(_0x1138d0);if(!skipDayOfWeek(_0x13cdf0)&&!skipDate(_0x1138d0)){let _0x41ddc4=generateFreeTimesInDayString(_0x42f76c,_0x14aa14,_0x410b3f,_0x2126cf);_0x4a3c40=appendOutputDayString(_0x41ddc4,_0x4a3c40,_0x1138d0,_0x13cdf0);}return _0x4a3c40;};let getDateSetViaUrl=function(){let _0x4efa3f=REGEX_EXTRACT_URL_SET_DATE['exec'](window['location']['pathname']);let _0x901b05;let _0x58351f;let _0x4e2bbc;if(_0x4efa3f&&_0x4efa3f['length']===0x4){_0x901b05=_0x4efa3f[0x3];_0x58351f=_0x4efa3f[0x2]-0x1;_0x4e2bbc=_0x4efa3f[0x1];}return{'setViaUrlDayDigits':_0x901b05,'setViaUrlMonthDigits':_0x58351f,'setViaUrlYearDigits':_0x4e2bbc};};var callbackRun=function(_0x587ea7){AVAILABLE_START_HOUR=parseFloat(_0x587ea7['AVAILABLE_START_HOUR']);AVAILABLE_END_HOUR=parseFloat(_0x587ea7['AVAILABLE_END_HOUR']);BUFFER_BEFORE_AND_AFTER_MINS=parseInt(_0x587ea7['BUFFER_BEFORE_AND_AFTER_MINS']);MEETING_LENGTH_MINS=parseInt(_0x587ea7['MEETING_LENGTH_MINS']);HEADER_TEXT=_0x587ea7['HEADER_TEXT'];POST_TEXT=_0x587ea7['POST_TEXT'];INCLUDE_WEEKENDS=_0x587ea7['INCLUDE_WEEKENDS'];SKIP_DAYS_WITH_ALL_DAY_EVENTS=_0x587ea7['SKIP_DAYS_WITH_ALL_DAY_EVENTS'];UUID=_0x587ea7['UUID'];EXTENSION_REMOTE_URL=_0x587ea7['EXTENSION_REMOTE_URL'];console['clear']();console['log']('Calapp\x20by\x20ShareAvailability.com\x20running\x20with\x20config',_0x587ea7);if(OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS!==0x0){console['log']('OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS',OUTPUT_RECIPIENT_TIMEZONE_OFFSET_HOURS);}var _0x1d99bb='\x20–\x20';var _0x1945e4=HEADER_TEXT;var _0x56536b=null;var _0x37c1f5=null;datesToSkip=[];var _0x5af076=[];var _0x2f5c4b=[];var _0x5b6b89=document['evaluate']('//*[@class=\x27taTyDe\x27]',document,null,XPathResult['ORDERED_NODE_SNAPSHOT_TYPE'],null);for(let _0x17c3e4=0x0;_0x17c3e4<_0x5b6b89['snapshotLength'];_0x17c3e4++){for(let _0x528356=0x0;_0x528356<_0x5b6b89['snapshotItem'](_0x17c3e4)['childNodes']['length'];_0x528356++){let _0x55202e=_0x5b6b89['snapshotItem'](_0x17c3e4)['childNodes'][_0x528356];let _0x29eaff=_0x55202e['childNodes'][0x0]['childNodes'][0x0];if(_0x55202e['className']==='p8Qosf'){if(_0x56536b!==null){if(_0x37c1f5===null){let {setViaUrlDayDigits,setViaUrlMonthDigits,setViaUrlYearDigits}=getDateSetViaUrl();if(setViaUrlDayDigits){let _0x379c2f=getDateDayDigits(_0x56536b);let _0x538c1e=getDateMonthDigits(getDateMonthString(_0x56536b));if(setViaUrlMonthDigits<_0x538c1e||setViaUrlMonthDigits===_0x538c1e&&setViaUrlDayDigits<_0x379c2f){let _0x413446=new Date(MONTHS[setViaUrlMonthDigits]+'\x20'+setViaUrlDayDigits+',\x20'+setViaUrlYearDigits);_0x37c1f5=_0x413446['getDate']()+'\x20'+MONTHS[_0x413446['getMonth']()]+',\x20'+DAYS[_0x413446['getDay']()===0x0?0x6:_0x413446['getDay']()-0x1];}}}let _0x5c233c=processNewDateEntry(_0x56536b,_0x37c1f5,_0x5af076,_0x2f5c4b);_0x1945e4=_0x1945e4+(_0x1945e4===HEADER_TEXT&&_0x5c233c?'\x0a\x0a'+trimLineBreaks(_0x5c233c):_0x5c233c);_0x5af076=[];_0x2f5c4b=[];}_0x37c1f5=_0x56536b;_0x56536b=_0x29eaff['textContent']+'\x20'+_0x55202e['childNodes'][0x0]['childNodes'][0x1]['textContent'];}else if(SKIP_DAYS_WITH_ALL_DAY_EVENTS&&_0x29eaff&&ALL_DAY_REGEX['test'](_0x29eaff['textContent'])){if(datesToSkip['indexOf'](_0x56536b)===-0x1){datesToSkip['push'](_0x56536b);}}else if(_0x29eaff&&_0x29eaff['textContent']['indexOf'](_0x1d99bb)!==-0x1){let {startTime,endTime}=convertStringWithAmPmTo24Time(_0x29eaff['textContent']['split'](_0x1d99bb)[0x0],_0x29eaff['textContent']['split'](_0x1d99bb)[0x1]);if(startTime>endTime){startTime=startTime-0x18;}_0x5af076['push'](startTime);_0x2f5c4b['push'](endTime);}}}if(_0x56536b!==null){_0x1945e4=_0x1945e4+processNewDateEntry(_0x56536b,_0x37c1f5,_0x5af076,_0x2f5c4b);}if(_0x1945e4===HEADER_TEXT){console['warn']('No\x20future\x20appointments\x20found\x20in\x20visible\x20days');}else{_0x1945e4=trimLineBreaks(_0x1945e4)+(POST_TEXT?'\x0a\x0a'+POST_TEXT:'')+'\x0a\x0a'+REFERRAL_LINK+UUID;displayOutputDiv(_0x1945e4);console['log'](_0x1945e4);}};var main=function(_0x2f9028,_0x417c8c){console['log']('Content\x20main()\x20called\x20by',_0x2f9028,'isShowLoader',_0x417c8c);chrome['storage']['sync']['get']({'AVAILABLE_START_HOUR':'','AVAILABLE_END_HOUR':'','BUFFER_BEFORE_AND_AFTER_MINS':'','MEETING_LENGTH_MINS':'','HEADER_TEXT':'','POST_TEXT':'','INCLUDE_WEEKENDS':![],'SKIP_DAYS_WITH_ALL_DAY_EVENTS':![],'UUID':'','EXTENSION_REMOTE_URL':'Error\x20EXTENSION_REMOTE_URL\x20not\x20set\x20in\x20local\x20storage'},function(_0x50a83e){if(_0x417c8c){showLoader(_0x50a83e['EXTENSION_REMOTE_URL']);setTimeout(function(){callbackRun(_0x50a83e);},0xdac);}else{callbackRun(_0x50a83e);}});};const showLoader=function(_0x3bfe25){var _0x45d9f8='loaderCss';if(!document['getElementById'](_0x45d9f8)){var _0x40f64e=document['getElementsByTagName']('head')[0x0];var _0x1982cb=document['createElement']('link');_0x1982cb['id']=_0x45d9f8;_0x1982cb['rel']='stylesheet';_0x1982cb['type']='text/css';_0x1982cb['href']=_0x3bfe25+'loader.css';_0x1982cb['media']='all';_0x40f64e['appendChild'](_0x1982cb);}let _0x2c77e4=document['createElement']('div');_0x2c77e4['id']=ANIMATION_DIV_ID;_0x2c77e4['className']='container';let _0x572144=document['createElement']('div');_0x572144['className']='transparent';_0x2c77e4['appendChild'](_0x572144);let _0xacb677=document['createElement']('div');_0xacb677['className']='loader';_0x572144['appendChild'](_0xacb677);for(let _0x5c2659=0x0;_0x5c2659<0x6;_0x5c2659++){let _0xe1bc0e=document['createElement']('div');_0xe1bc0e['className']='loader--dot';_0xacb677['appendChild'](_0xe1bc0e);}let _0x551e51=document['createElement']('div');_0x551e51['className']='loader--text';_0xacb677['appendChild'](_0x551e51);document['body']['appendChild'](_0x2c77e4);};var initialized;if(typeof initialized==='undefined'){initialized=!![];chrome['runtime']['onMessage']['addListener'](function(_0x87d0ea,_0x31d4e9,_0x2904a6){main('chrome.runtime.onMessage\x20(Chrome\x20toolbar\x20button\x20clicked)',![]);});}var addEventListenerLoadCalled;window['addEventListener']('load',function(){if(typeof addEventListenerLoadCalled==='undefined'){addEventListenerLoadCalled=!![];main('window.addEventListener\x20load',!![]);}});