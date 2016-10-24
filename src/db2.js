import Config from './config';

console.log(Config);
setTimeout(function(){ console.log(Config); Config.increment(); }, 3000);

export function db() {

  return '';
}
//export db;
