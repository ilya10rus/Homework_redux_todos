import style from "./App.module.css";
import { CurrentObject, FormTasks } from "./components";
import { useDebounce } from "./utils/useDebounce";
import { useRequestGetData } from "./hook-and-func";
import { useSelector, useDispatch } from "react-redux";
import { useFormSearch } from "./hook-and-func/use-Form-Search";

export const App = function () {
  const ref = useSelector((state) => state.state.refresh);
  const sort = useSelector((state) => state.sorting.sorting);
  const isLoading = useSelector((state) => state.isLoading.isLoading);
  const { FormSearch, search } = useFormSearch();
  const dispatch = useDispatch();
  const searchFilter = useDebounce(search);
  const refresh = () => {
    dispatch({ type: "REFRESH", payload: !ref });
  };

  const { todos } = useRequestGetData(sort, searchFilter);

  return (
    <div className={style.wrapper}>
      {isLoading ? (
        <div className={style.loader}></div>
      ) : (
        <div className={style.container}>
          {FormSearch()}
          {todos.length === 0 ? (
            <h1 className={style.addTaskText}>Добавить новую задачу</h1>
          ) : (
            ""
          )}
          <FormTasks refresh={refresh} />
          <CurrentObject refresh={refresh} todos={todos} />
        </div>
      )}
    </div>
  );
};
