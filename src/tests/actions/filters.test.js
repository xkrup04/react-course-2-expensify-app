import moment from "moment";
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";

// setStartDate
test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

// setEndDate
test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

// set text filter
test("should generate set text filter action object with new value", () => {
  const text = "ahoj";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test("should generate set text filter action object with default value", () => {
  const text = "";
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

// set sort by date
test("should generate action object for sort by date", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE"    
  });
});

// set sort by amount
test("should generate action object for sort by amount", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT"    
  });
});