const errorHandlers = (error) => {
  if (!error.response) {
    const connectionError = new Error("errors.connection");

    return Promise.reject(connectionError);
  }

  const { data, status } = error.response;

  switch (status) {
    default: {
      const defaultMessage = data?.message ?? "errors.default";
      const defaultError = new Error(defaultMessage);
      defaultError.status = status;

      return Promise.reject(defaultError);
    }
  }
};

export default errorHandlers;
