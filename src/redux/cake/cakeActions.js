import { BUY_CAKE, SELL_CAKE } from './cakeTypes';

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}

export const sellCake = (number = 1) => {
  return {
    type: SELL_CAKE,
    payload: number,
  };
};
