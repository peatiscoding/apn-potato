const apn = require('apn')
const config = require('./config.json')
const { argv } = require('process')

/**
 * 
 * @param {string} deviceId 
 * @returns {Promise<void>}
 */
const push = async (deviceId) => {
  if (!deviceId) {
    console.log('Run')
  }
  console.log(`PUSH TO ${config.bundleId} on to device: ${deviceId}`)
}

push(argv[2])