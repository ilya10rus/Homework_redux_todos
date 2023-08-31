import { DefaultObject, SortedObject } from "./";
import style from "../App.module.css";
import { useDispatch, useSelector } from "react-redux";

export const CurrentObject = ({ refresh }) => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.sorting.sorting);
  const selectSort = useSelector((state) => state.sorting.selectSort);
  const todos = useSelector((state) => state.todos.todos);

  const sorting = ({ target }) => {
    dispatch({ type: "SELECT_SORT", payload: target.value });
    target.value === "A-z"
      ? dispatch({ type: "SORT", payload: false })
      : dispatch({ type: "SORT", payload: true });
  };

  return (
    <>
      <select className={style.sort} value={selectSort} onChange={sorting}>
        <option value={"default"}>Без сортировки...</option>
        <option value={"A-z"}>Сортировка по алфавиту</option>
      </select>
      {sort ? (
        <DefaultObject todos={todos} refresh={refresh} />
      ) : (
        <SortedObject todos={todos} refresh={refresh} />
      )}
    </>
  );
};
