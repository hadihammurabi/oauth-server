'use strict'

const Factory = use('Factory')
const UserService = use('App/Services/v1/UserService')

class UserSeeder {
  async run () {
    await UserService.create(
      'admin',
      '123123'
    );
  }
}

module.exports = UserSeeder
