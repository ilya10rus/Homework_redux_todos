import style from "./useFormSearch.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

export const useFormSearch = () => {
  const search = useSelector((state) => state.state.search);
  const dispatch = useDispatch();

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
          onChange={() => SearchRequest()}
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
