import queryClient from "../queryClient";

const addCachedItem = (queryKey, { data }) => {
  queryClient.setQueryData(queryKey, (oldData) => [...oldData, data]);
};

const updateCachedItem = (queryKey, { id, data }) => {
  queryClient.setQueryData(queryKey, (oldData) =>
    oldData.map((item) => (item.id === id ? { ...item, ...data } : item)),
  );
};

const removeCachedItem = (queryKey, { id }) => {
  queryClient.setQueryData(queryKey, (oldData) =>
    oldData.filter((item) => item.id !== id),
  );
};

const updateCache = ({ type, queryKey, payload }) => {
  switch (type) {
    case "CREATE": {
      addCachedItem(queryKey, payload);
      break;
    }

    case "UPDATE": {
      updateCachedItem(queryKey, payload);
      break;
    }

    case "REMOVE": {
      removeCachedItem(queryKey, payload);
      break;
    }

    default: {
      break;
    }
  }
};

export default updateCache;
