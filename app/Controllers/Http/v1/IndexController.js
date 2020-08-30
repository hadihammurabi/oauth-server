'use strict'

class IndexController {
  constructor() {
    this.services = use('App/Services/v1/Services')
    this.forwardService = use('App/Services/v1/ForwardService')
    this.responseService = use('App/Services/v1/ResponseService')
  }

  async index({ request }) {
    const { service, url, method, data } = request.all()
    const serviceDetail = await this.services.findByName(service);
    const uri = `${serviceDetail.root}${url}`;

    return await this.forwardService.forward(method, uri, data);
  }
}

module.exports = IndexController
