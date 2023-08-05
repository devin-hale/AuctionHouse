export default function quantityReducer(state, action) {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        [`${action.payload.item.id}`]: state[`${action.payload.item.id}`] + 1,
      };
    }
    case "decrement": {
      return {
        ...state,
        [`${action.payload.item.id}`]: state[`${action.payload.item.id}`] - 1,
      };
    }
    case "setAmount": {
      return {
        ...state,
        [`${action.payload.item.id}`]: action.payload.amount,
      };
    }
    default: {
      throw error("unknown action: " + action.type);
    }
  }
}
