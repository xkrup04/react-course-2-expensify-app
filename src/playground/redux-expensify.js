import { createStore, combineReducers } from "redux";




// timestamps (milliseconds)
// 0 => January 1st 1970 (unix epoch)
// 33400, 10, -203








store.subscribe(() => {
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const ExpenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: -21000 })
);
const ExpenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: ExpenseOne.expense.id }));

// store.dispatch(editExpense(ExpenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("fe"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate()); //date

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));


const demoState = {
  expenses: [
    {
      id: "lasdfijsd",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
