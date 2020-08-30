class ResponseService {
  success(data) {
    return { data };
  }

  error(error, message) {
    return {
      error: {
        name: error,
        message,
      },
    };
  }
}

module.exports = new ResponseService();
