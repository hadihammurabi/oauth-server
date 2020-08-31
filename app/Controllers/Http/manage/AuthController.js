'use strict'

class AuthController {
  async index({ view }) {
    return await view.render('index');
  }
}

module.exports = AuthController
