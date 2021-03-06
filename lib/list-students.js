'use strict'

const Wreck = require('wreck')
const generateToken = require('tfk-generate-jwt')
const config = require('../config')

module.exports = (args, callback) => {
  const buddyQueryUrl = `${config.BUDDY_API_URL}/groups/${args.groupId}/students`
  const token = generateToken({key: config.JWT_KEY, payload: {system: 'tfk-seneca-mesh-buddy'}})
  const wreckOptions = {
    json: true,
    headers: {
      Authorization: token
    }
  }

  Wreck.get(buddyQueryUrl, wreckOptions, function (error, res, payload) {
    if (error) {
      return callback(error, null)
    } else {
      if (payload.statusCode) {
        return callback(null, {statusKode: payload.statusCode})
      } else {
        return callback(null, payload)
      }
    }
  })
}
