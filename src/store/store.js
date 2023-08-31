import {
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reduserMain } from "./redusers/reduser-Main";
import { reduserLoading } from "./redusers/reduser-Loading";
import { reduserSorting } from "./redusers/reduser-Sorting";
import { reduserTodos } from "./redusers/reduser-Todos";

const rootReducer = combineReducers({
  state: reduserMain,
  isLoading: reduserLoading,
  todos: reduserTodos,
  sorting: reduserSorting,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
