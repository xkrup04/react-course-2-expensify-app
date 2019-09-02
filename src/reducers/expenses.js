// Expenses reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      // concat will create new array adding items to the end
      // return state.concat(action.expense);
      // Spread operator allows to add items before or after...
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      // filter will return new array for specified conditions
      return state.filter(({ id }) => action.id !== id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            //Babel spread object operator with override properties set later
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

