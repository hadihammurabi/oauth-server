'use strict'

class OAuthController {
  constructor() {
    this.responseService = use('App/Services/v1/ResponseService')
    this.userService = use('App/Services/v1/UserService')
    this.services = use('App/Services/v1/Services')
    this.forwardService = use('App/Services/v1/ForwardService')
    this.errorService = use('App/Services/v1/ErrorService')
    this.hashService = use('App/Services/v1/HashService')
  }

  async token({ request, response, auth }) {
    const { grant_type, refresh_token, username, password } = request.all();
    
    let token;
    if (grant_type === 'password') {
      const user = await this.userService.findByUsername(username);
      if (!user) {
        return response.status(400).json(this.errorService.getMap(this.errorService.LOGIN_FAIL));
      }

      const passwordValid = await user.passwordCheck(password);
      if (!passwordValid) {
        return response.status(400).json(this.errorService.getMap(this.errorService.LOGIN_FAIL));
      }

      token = await auth.withRefreshToken().generate(user);
    } else if (grant_type === 'refresh') {
      token = await auth.newRefreshToken().generateForRefreshToken(refresh_token);
    }

    return this.responseService.success(token);
  }

  async signature({ request, response, auth }) {
    const { service, url, method } = request.all()
    const user = await auth.getUser();
    const token = await user.tokens().orderBy('created_at', 'desc').first();

    const serviceDetail = await this.services.findByName(service);
    const stringToSign = `${method}:${serviceDetail.root}:${url}`;

    const hash = await this.hashService.create(stringToSign);
    return this.responseService.success(hash);
  }
}

module.exports = OAuthController
