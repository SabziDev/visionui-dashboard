/* eslint-disable default-case */

import queryClient from "../queryClient";

const updateCachedItem = (queryKey, { id, data }) => {
  queryClient.setQueryData(queryKey, (oldData) =>
    oldData.map((item) => (item.id === id ? { ...item, ...data } : item)),
  );
};

const updateCache = ({ type, queryKey, payload }) => {
  switch (type) {
    case "UPDATE": {
      updateCachedItem(queryKey, payload);
      break;
    }
  }
};

export default updateCache;
