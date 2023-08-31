const initialStateLoader = {
  search: "",
  refresh: false,
  userId: "",
  valueNewTask: "",
};

export const reduserMain = (state = initialStateLoader, { type, payload }) => {
  switch (type) {
    case "SEARCH":
      return { ...state, search: (state.search = payload) };
    case "REFRESH":
      return { ...state, refresh: (state.refresh = payload) };
    case "USER_ID":
      return { ...state, userId: (state.userId = payload) };
    case "VALUE_NEW_TASK":
      return { ...state, valueNewTask: (state.valueNewTask = payload) };

    default:
      return state;
  }
};
