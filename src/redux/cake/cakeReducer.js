import { BUY_CAKE } from './cakeTypes';

const initialState = {
  numberOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch(action.type) { //1 action we imported
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numberOfCakes - 1
    }
    default: return state; //Initial state or current state
  }
}

export default cakeReducer;
