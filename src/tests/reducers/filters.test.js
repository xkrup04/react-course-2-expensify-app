import filtersReducers from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filtersReducers(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("shold set sortBy to amount", () => {
  const state = filtersReducers(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("shold set sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducers(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("shold set text filter", () => {
  const text = "my text";
  const action = { type: "SET_TEXT_FILTER", text };
  const state = filtersReducers(undefined, action);
  expect(state.text).toBe(text);
});

test("shold set start date", () => {
  const startDate = moment(0);
  const action = { type: "SET_START_DATE", startDate };
  const state = filtersReducers(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test("shold set end date", () => {
  const endDate = moment(0).add(2, "days");
  const action = { type: "SET_END_DATE", endDate };
  const state = filtersReducers(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
