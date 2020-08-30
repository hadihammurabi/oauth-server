const ResponseService = use('App/Services/v1/ResponseService')

class ErrorService {

  constructor() {
    this.LOGIN_FAIL = 'LOGIN_FAIL';
    this.INVALID_SIGNATURE = 'INVALID_SIGNATURE';
    this.ERROR = {
      [this.LOGIN_FAIL]: 'Invalid username or password.',
      [this.INVALID_SIGNATURE]: 'Invalid signature.'
    };
  }

  get(key) {
    return this.ERROR[key];
  }

  getMap(key) {
    return ResponseService.error(key, this.get(key));
  }
}

module.exports = new ErrorService();
