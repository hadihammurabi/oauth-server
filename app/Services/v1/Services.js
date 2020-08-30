const Service = use('App/Models/Service');

class Services {
  async create(name, root) {
    return await Service.create({ name, root });
  }

  async find(where) {
    return await Service.query().where(where).fetch();
  }

  async findById(id) {
    return await Service.query().where({ id }).first();
  }

  async findByName(name) {
    return await Service.query().where({ name }).first();
  }
}

module.exports = new Services();
