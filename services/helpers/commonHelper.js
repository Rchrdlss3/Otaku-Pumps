export const internalError = ((error) => {
    return {
      status: 500,
      error: 'Internal Error',
      message: error
    }
  });