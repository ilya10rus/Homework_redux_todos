const initialStateSorting = {
  sorting: true,
  selectSort: "",
};

export const reduserSorting = (
  state = initialStateSorting,
  { type, payload }
) => {
  switch (type) {
    case "SORT":
      return { ...state, sorting: (state.sorting = payload) };
    case "SELECT_SORT":
      return { ...state, selectSort: (state.selectSort = payload) };
    default:
      return state;
  }
};
