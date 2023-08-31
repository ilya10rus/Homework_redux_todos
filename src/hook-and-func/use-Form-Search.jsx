import style from "./useFormSearch.module.css";
import { useDispatch, useSelector } from "react-redux";

export const useFormSearch = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.state.search);

  const SearchRequest = ({ target }) => {
    dispatch({ type: "SEARCH", payload: target.value });
  };

  const FormSearch = () => {
    return (
      <form className={style.FormSearch}>
        <input
          type="text"
          placeholder="Поиск"
          name="search"
          value={search}
          onChange={SearchRequest}
          className={style.search}
        />
      </form>
    );
  };
  return {
    search,
    FormSearch,
  };
};
