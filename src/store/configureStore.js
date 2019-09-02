import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

// Store creation

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer
    }),
    //this is necessary for Chrome extension Redux devtools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
