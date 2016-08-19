'use strict'

const Seneca = require('seneca')
const Mesh = require('seneca-mesh')
const Buddy = require('./lib/buddy')
const envs = process.env

const options = {
  seneca: {
    tag: envs.TFK_SENECA_MESH_BUDDY_TAG || 'tfk-seneca-mesh-buddy'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'role:buddy, cmd:list-contact-teachers', model: 'consume'},
      {pin: 'role:buddy, cmd:list-classes', model: 'consume'},
      {pin: 'role:buddy, cmd:list-students', model: 'consume'},
      {pin: 'role:buddy, cmd:search-students', model: 'consume'}
    ]
  },
  buddyOptions: {
    tag: envs.TFK_SENECA_MESH_BUDDY_TAG || 'tfk-seneca-mesh-buddy'
  },
  isolated: {
    host: envs.TFK_SENECA_MESH_BUDDY_HOST || 'localhost',
    port: envs.TFK_SENECA_MESH_BUDDY_PORT || 8000
  }
}

const Service = Seneca(options.seneca)

if (envs.TFK_SENECA_MESH_BUDDY_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(Buddy, options.buddyOptions)
