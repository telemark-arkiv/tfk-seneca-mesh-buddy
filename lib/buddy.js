'use strict'

const listContactTeachers = require('./list-contact-teachers')
const listStudents = require('./list-students')
const listClasses = require('./list-classes')
const searchStudents = require('./search-students')

module.exports = function (options) {
  const seneca = this

  seneca.add('role:buddy, list:contact-teachers', listContactTeachers)
  seneca.add('role:buddy, list:students', listStudents)
  seneca.add('role:buddy, list:classes', listClasses)
  seneca.add('role:buddy, search:students', searchStudents)

  return {
    name: options.tag || 'tfk-seneca-mesh-buddy'
  }
}
