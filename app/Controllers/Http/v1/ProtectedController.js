'use strict'

class ProtectedController {
  constructor() {
    this.responseService = use('App/Services/v1/ResponseService');
  }
  
  index() {
    return this.responseService.success({
      message: 'hello, this is protected data.',
    });
  }
}

module.exports = ProtectedController
