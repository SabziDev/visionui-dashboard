import { useQueryClient } from "@tanstack/react-query";

const addCachedItem = ({ queryClient, queryKey }, { data }) => {
  queryClient.setQueryData(queryKey, (oldData) => [...oldData, data]);
};

const updateCachedItem = ({ queryClient, queryKey }, { id, data }) => {
  queryClient.setQueryData(queryKey, (oldData) =>
    oldData.map((item) => (item.id === id ? { ...item, ...data } : item)),
  );
};

const removeCachedItem = ({ queryClient, queryKey }, { id }) => {
  queryClient.setQueryData(queryKey, (oldData) =>
    oldData.filter((item) => item.id !== id),
  );
};

const useUpdateCache = ({ type, queryKey }) => {
  const queryClient = useQueryClient();

  const updateCache = ({ id, data }) => {
    switch (type) {
      case "CREATE": {
        addCachedItem({ queryClient, queryKey }, { data });
        break;
      }

      case "UPDATE": {
        updateCachedItem({ queryClient, queryKey }, { id, data });
        break;
      }

      case "REMOVE": {
        removeCachedItem({ queryClient, queryKey }, { id });
        break;
      }

      default: {
        break;
      }
    }
  };

  return updateCache;
};

export default useUpdateCache;
