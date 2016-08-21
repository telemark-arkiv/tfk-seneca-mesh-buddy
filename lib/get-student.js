'use strict'

const Wreck = require('wreck')
const generateToken = require('tfk-generate-jwt')
const config = require('../config')

module.exports = (args, callback) => {
  const buddyQueryUrl = `${config.BUDDY_API_URL}/users/${args.userId}/students/${args.studentUserName}`
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
      return callback(null, payload)
    }
  })
}
