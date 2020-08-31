const crypto = require('crypto');

class HmacService {
  constructor() {
    this.algo = 'RSA-SHA512'
    this.keyPair = {};
  }

  create(key, stringToSign) {
    return crypto.createHmac(this.algo, key).update(stringToSign).digest('hex');
  }

  verify(key, stringToVerify, hash) {
    const result = this.create(key, stringToVerify);
    return result === hash;
  }
}

module.exports = new HmacService();
