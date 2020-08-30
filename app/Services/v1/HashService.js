class HmacService {
  constructor() {
    this.hash = use('Hash');
    this.algo = 'RSA-SHA256'
  }

  async create(stringToSign) {
    return await this.hash.make(stringToSign);
  }

  async verify(stringToVerify, hash) {
    return await this.hash.verify(stringToVerify, hash);
  }
}

module.exports = new HmacService();
