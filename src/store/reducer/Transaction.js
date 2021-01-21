import {ADD_TRANSACTION, DELETE_TRANSACTION} from '../actions/types';

const initialState = {
  transactions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION: {
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    }
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => item.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
