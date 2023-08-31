import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useRequestGetData = (sort, searchFilter) => {
  const dispatch = useDispatch();
  const refresh = useSelector((state) => state.state.refresh);
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch({ type: "LOADING", payload: true });
    fetch(`http://localhost:3004/todos?q=${searchFilter}`)
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => {
        dispatch({ type: "TODO", payload: loadedTodos });
      })
      .finally(() => dispatch({ type: "LOADING_DONE", payload: false }));
  }, [sort, searchFilter, refresh]);
  return {
    todos,
  };
};
