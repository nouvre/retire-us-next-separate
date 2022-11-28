import axios from "@/util/api";

export const auth =
  ({ getState }) =>
  (next) =>
  (action) => {
    const { token } = getState().auth;
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${encodeURI(
        token
      )}`;
    else delete axios.defaults.headers.common["Authorization"];
    return next(action);
  };
