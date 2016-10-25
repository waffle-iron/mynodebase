import log from 'winston';

log.remove(log.transports.Console);
log.add(log.transports.Console, {'timestamp': function() { 
var date = new Date(); 
 return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds();
}, 'colorize': true});

export let logger = log;

