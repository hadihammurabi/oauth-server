'use strict'

class Signature {
  constructor() {
    this.errorService = use('App/Services/v1/ErrorService')
    this.hashService = use('App/Services/v1/HashService')
    this.services = use('App/Services/v1/Services')
  }

  async handle ({ request, response, auth }, next) {
    const { service, method, url } = request.all()

    const user = await auth.getUser();
    const token = await user.tokens().orderBy('created_at', 'desc').first();

    const serviceDetail = await this.services.findByName(service);
    const stringToVerify = `${method}:${serviceDetail.root}:${url}`;

    const signature = request.header('signature');
    const signatureValid = await this.hashService.verify(stringToVerify, signature);

    if (!signatureValid) {
      return response.status(400).json(this.errorService.getMap(this.errorService.INVALID_SIGNATURE));
    }

    await next()
  }
}

module.exports = Signature
