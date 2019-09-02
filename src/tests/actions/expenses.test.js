import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

// remove expense
test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "123abc" });
});

// edit expense
test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New note value"
    }
  });
});

// add expense
test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "short description",
    amount: 10900,
    createdAt: 1000,
    note: "This is note"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default values", () => {
  const defaultExpenseData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...defaultExpenseData,
      id: expect.any(String)
    }
  });
});
