'use strict'

const listContactTeachers = require('./list-contact-teachers')
const listStudents = require('./list-students')
const listContactClasses = require('./list-contact-classes')
const searchStudents = require('./search-students')
const getStudent = require('./get-student')

module.exports = function (options) {
  const seneca = this

  seneca.add('role:buddy, list:contact-teachers', listContactTeachers)
  seneca.add('role:buddy, list:students', listStudents)
  seneca.add('role:buddy, list:contact-classes', listContactClasses)
  seneca.add('role:buddy, search:students', searchStudents)
  seneca.add('role:buddy, get:student', getStudent)

  return {
    name: options.tag || 'tfk-seneca-mesh-buddy'
  }
}
