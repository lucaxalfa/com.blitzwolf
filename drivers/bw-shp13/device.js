'use strict';

const Homey = require('homey');
const { ZigBeeDevice } = require('homey-zigbeedriver');
const { CLUSTER } = require('zigbee-clusters');
// const { debug } = require('zigbee-clusters');

// debug(true);

class bw_shp13 extends ZigBeeDevice {
    async onNodeInit({ zclNode }) {

        if (this.hasCapability('onoff')) {
            this.registerCapability('onoff', CLUSTER.ON_OFF);
          }
    }
}

module.exports = bw_shp13;