/* eslint-disable default-case */
/* eslint-disable @stylistic/padding-line-between-statements */
/* eslint-disable custom/add-blank-line-before-jump-statement */

const errMessages = {
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
  let message = errMessages.default;
  const status = err.response?.status;

  switch (err.code) {
    case "ERR_NETWORK": {
      message = errMessages.network;
      break;
    }
    case "ECONNABORTED": {
      message = errMessages.timeout;
      break;
    }
  }
  if (status >= 500) {
    message = errMessages.server;
  }

  switch (status) {
    case 403: {
      message = errMessages.access;
      break;
    }
    case 404: {
      message = errMessages.notFound;
      break;
    }
    case 409: {
      message = errMessages.conflict;
      break;
    }
    case 422: {
      message = errMessages.validation;
      break;
    }
  }

  err.message = err.config.customError?.message ?? message;
  return Promise.reject(err);
};

export default errorHandler;
