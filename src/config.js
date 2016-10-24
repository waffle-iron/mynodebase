class Config {
  constructor(initial) {
    this.seed = initial
  }

  increment() {
    return this.seed += 1
  }
}

if(global['config'] == undefined) {
	global['config'] = new Config(0);
} else {
global['config'].increment();
}
export default config = global['config'];

