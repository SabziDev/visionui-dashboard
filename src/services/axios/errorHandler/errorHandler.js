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
  const status = err.response?.status;

  switch (err.code) {
    case "ERR_NETWORK": {
      err.message = errMessages.network;
      return Promise.reject(err);
    }
    case "ECONNABORTED": {
      err.message = errMessages.timeout;
      return Promise.reject(err);
    }
  }
  if (status >= 500) {
    err.message = errMessages.server;
    return Promise.reject(err);
  }

  switch (status) {
    case 403: {
      err.message = errMessages.access;
      return Promise.reject(err);
    }
    case 404: {
      err.message = errMessages.notFound;
      return Promise.reject(err);
    }
    case 409: {
      err.message = errMessages.conflict;
      return Promise.reject(err);
    }
    case 422: {
      err.message = errMessages.validation;
      return Promise.reject(err);
    }
  }

  err.message = errMessages.default;
  return Promise.reject(err);
};

export default errorHandler;
