const initialStateLoader = {
  isLoading: false,
};

export const reduserLoading = (
  state = initialStateLoader,
  { type, payload }
) => {
  switch (type) {
    case "LOADING":
      return { ...state, isLoading: (state.isLoading = payload) };
    case "LOADING_DONE":
      return { ...state, isLoading: (state.isLoading = payload) };
    default:
      return state;
  }
};
