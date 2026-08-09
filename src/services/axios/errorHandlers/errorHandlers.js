const errorHandlers = (error) => {
  if (!error.response) {
    const connectionError = new Error("errors.connection");

    throw connectionError;
  }

  const { data, status } = error.response;

  switch (status) {
    default: {
      const defaultMessage = data?.message ?? "errors.default";
      const defaultError = new Error(defaultMessage);
      defaultError.status = status;

      throw defaultError;
    }
  }
};

export default errorHandlers;
