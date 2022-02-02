import { BUY_CAKE, SELL_CAKE } from './cakeTypes';

const initialState = {
  numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) { //1 action we imported
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - action.payload
    }
    case SELL_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes + action.payload
    }

    default: return state; //Initial state or current state
  }
}

export default cakeReducer;
