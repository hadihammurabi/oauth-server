const User = use('App/Models/User')

class UserService {

  async create(username, password) {
    return await User.create({ username, password });
  }

  async findByUsername(username) {
    return await User.query().where({ username }).first();
  }

}

module.exports = new UserService();
