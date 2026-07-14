const errorHandlers = (error) => {
  if (!error.response) {
    const connectionError = new Error("Unable to connect to the server");

    return Promise.reject(connectionError);
  }

  const { status, data } = error.response;

  switch (status) {
    default: {
      const defaultMessage =
        data?.message ?? "Something went wrong! Please try again";
      const defaultError = new Error(defaultMessage);
      defaultError.status = status;

      return Promise.reject(defaultError);
    }
  }
};

export default errorHandlers;
