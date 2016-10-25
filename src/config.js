class Config {
  constructor(initial) {
    this.config = require('../config/default.json');
    console.log(this.config);
  }
}

export let config = new Config(0);

