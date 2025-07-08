const requestErrorHandler = (controller) => {
  return async (req, res, next) => {
    try {
      return await controller(req, res);
    } catch (err) {
      next(err);
    }
  };
};

export { requestErrorHandler };
