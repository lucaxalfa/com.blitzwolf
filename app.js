'use strict';

const Homey = require('homey');

class Blitzwolf extends Homey.App {
  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('Blitzwolf has been initialized');
  }
}

module.exports = Blitzwolf;