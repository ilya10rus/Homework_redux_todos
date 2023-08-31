import style from "./FormTask.module.css";
import { requestAddNewTask } from "../hook-and-func";
import { useDispatch, useSelector } from "react-redux";

export const FormTasks = ({ refresh }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.state.userId);
  const valueNewTask = useSelector((state) => state.state.valueNewTask);

  const onSubmit = (event) => {
    event.preventDefault();
    requestAddNewTask(valueNewTask, userId, refresh);
  };

  return (
    <>
      <form onSubmit={onSubmit} className={style.formCreate}>
        <input
          type="text"
          name="userId"
          placeholder="Номер пользователя..."
          value={userId}
          onChange={({ target }) =>
            dispatch({ type: "USER_ID", payload: target.value })
          }
          className={style.userId}
        />
        <textarea
          type="textarea"
          name="title"
          placeholder="Создай задачу..."
          value={valueNewTask}
          onChange={({ target }) =>
            dispatch({ type: "VALUE_NEW_TASK", payload: target.value })
          }
          className={style.create}
        />
        <button
          type="submit"
          className={style.btn}
          disabled={userId.trim() === "" || valueNewTask.trim() === ""}
        >
          Создать
        </button>
      </form>
    </>
  );
};
