const axios = require('axios');

class ForwardService {

  async forward(method, url, data) {
    const result = await axios({
      method,
      url,
      data,
    });
    return result.data;
  }

}

module.exports = new ForwardService();
