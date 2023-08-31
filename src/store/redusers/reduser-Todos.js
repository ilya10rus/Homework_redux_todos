const initialStateTodos = {
  todos: [],
};

export const reduserTodos = (state = initialStateTodos, { type, payload }) => {
  switch (type) {
    case "TODO":
      return { ...state, todos: (state.todos = payload) };

    default:
      return state;
  }
};
