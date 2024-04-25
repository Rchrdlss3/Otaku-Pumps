const internalError = ((error) => {
    return {
      status: 500,
      error: 'Internal Error',
      message: error
    }
  });

  const userExistError = ((error) => {
    return {
      status: 400,
      error: 'User already exists',
      message: error
    }
  }) 
  module.exports = internalError;