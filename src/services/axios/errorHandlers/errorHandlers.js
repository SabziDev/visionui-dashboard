/* eslint-disable default-case */
/* eslint-disable @stylistic/padding-line-between-statements */
/* eslint-disable custom/add-blank-line-before-jump-statement */

const errorHandlers = (err) => {
  switch (err.code) {
    case "ERR_NETWORK": {
      err.message = "errors.connection";
      return Promise.reject(err);
    }
    case "ECONNABORTED": {
      err.message = "errors.abort";
      return Promise.reject(err);
    }
  }

  const status = err.response?.status;
  if (status >= 500) {
    err.message = "errors.server";
    return Promise.reject(err);
  }
  switch (status) {
    case 403: {
      err.message = "errors.access";
      return Promise.reject(err);
    }
    case 404: {
      err.message = "errors.notFound";
      return Promise.reject(err);
    }
    case 409: {
      err.message = "errors.conflict";
      return Promise.reject(err);
    }
    case 422: {
      err.message = "errors.validation";
      return Promise.reject(err);
    }
  }

  err.message = "errors.default";
  return Promise.reject(err);
};

export default errorHandlers;
