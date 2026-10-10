/* eslint-disable default-case */
/* eslint-disable @stylistic/padding-line-between-statements */
/* eslint-disable @sabzidev/padding-before-jump-statement */

const errorMessages = {
  network: "errors.network",
  timeout: "errors.timeout",
  server: "errors.server",

  access: "errors.access",
  notFound: "errors.notFound",
  conflict: "errors.conflict",
  validation: "errors.validation",

  default: "errors.default",
};

const errorHandler = (err) => {
  let message = errorMessages.default;
  const status = err.response?.status;

  switch (err.code) {
    case "ERR_NETWORK": {
      message = errorMessages.network;
      break;
    }
    case "ECONNABORTED": {
      message = errorMessages.timeout;
      break;
    }
  }
  if (status >= 500) {
    message = errorMessages.server;
  }

  switch (status) {
    case 403: {
      message = errorMessages.access;
      break;
    }
    case 404: {
      message = errorMessages.notFound;
      break;
    }
    case 409: {
      message = errorMessages.conflict;
      break;
    }
    case 422: {
      message = errorMessages.validation;
      break;
    }
  }

  err.message = err.config.customError?.message ?? message;
  return Promise.reject(err);
};

export default errorHandler;
