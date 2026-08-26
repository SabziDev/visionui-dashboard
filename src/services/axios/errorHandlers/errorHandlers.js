/* eslint-disable default-case */
/* eslint-disable @stylistic/padding-line-between-statements */

const errorHandlers = (error) => {
  switch (error.code) {
    case "ERR_NETWORK": {
      const connectionError = new Error("errors.connection");
      throw connectionError;
    }
    case "ECONNABORTED": {
      const connectionError = new Error("errors.abort");
      throw connectionError;
    }
  }
  switch (error.response.status) {
    case 400: {
      const invalidError = new Error("errors.invalid");
      throw invalidError;
    }
    case 403: {
      const accessError = new Error("errors.access");
      throw accessError;
    }
    case 404: {
      const notFoundError = new Error("errors.notFound");
      throw notFoundError;
    }
    case 409: {
      const conflictError = new Error("errors.conflict");
      throw conflictError;
    }
    case 422: {
      const validationError = new Error("errors.validation");
      throw validationError;
    }
  }
  if (error.response.status >= 500) {
    const serverError = new Error("errors.server");
    throw serverError;
  }

  const defaultError = new Error("errors.default");
  throw defaultError;
};

export default errorHandlers;
