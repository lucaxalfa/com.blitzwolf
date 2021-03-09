'use strict';

const Homey = require('homey');
const { ZigBeeDevice } = require('homey-zigbeedriver');
const { CLUSTER } = require('zigbee-clusters');
const { debug } = require('zigbee-clusters');

debug(false);

class bw_shp13 extends ZigBeeDevice {
    async onNodeInit({ zclNode }) {

        if (this.hasCapability('onoff')) {
          this.registerCapability('onoff', CLUSTER.ON_OFF, {
            getOpts: {
              getOnStart: true,
              pollInterval: 60000
            }
          });
        }

        if (this.hasCapability('measure_voltage')) {
          this.registerCapability('measure_voltage', CLUSTER.ELECTRICAL_MEASUREMENT, {
              getOpts: {
                getOnStart: true,
                pollInterval: 10000
              },
              reportParser(value) {
                return value;
              },
              endpoint: 1
            });
        }

        if (this.hasCapability('measure_current')) {
          this.registerCapability('measure_current', CLUSTER.ELECTRICAL_MEASUREMENT, {
              getOpts: {
                getOnStart: true,
                pollInterval: 10000
              },
              reportParser(value) {
                return value / 1000;
              },
              endpoint: 1
            });
        }

        if (this.hasCapability('measure_power')) {
          this.registerCapability('measure_power', CLUSTER.ELECTRICAL_MEASUREMENT, {
              getOpts: {
                getOnStart: true,
                pollInterval: 60000
              },
              reportParser(value) {
                return value;
              },
              endpoint: 1
            });
        }

        if (this.hasCapability('meter_power')) {
          this.registerCapability('meter_power', CLUSTER.METERING, {
              getOpts: {
                getOnStart: true,
                pollInterval: 300000
              },
              reportParser(value) {
                return value / 1000;
              },
              endpoint: 1
            });
        }
    }
}

module.exports = bw_shp13;