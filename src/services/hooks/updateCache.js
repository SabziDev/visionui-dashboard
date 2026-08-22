/* eslint-disable default-case */

import queryClient from "../queryClient";

const updateCachedItem = (queryKey, payload) => {
  queryClient.setQueryData(queryKey, (oldData) =>
    oldData.map((item) =>
      item.id === payload.id ? { ...item, ...payload.data } : item,
    ),
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
