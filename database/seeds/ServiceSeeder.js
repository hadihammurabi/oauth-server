'use strict'

const Factory = use('Factory')
const Services = use('App/Services/v1/Services')

class ServiceSeeder {
  async run () {
    await Services.create('auth', 'http://localhost:8080/v1');
  }
}

module.exports = ServiceSeeder
