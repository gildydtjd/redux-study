import {
  DECREASE,
  DECREASE_ASYNC,
  INCREASE,
  INCREASE_ASYNC,
} from '../type/type';

const increase = () => {
  return { type: INCREASE };
};

const decrease = () => {
  return { type: DECREASE };
};

const increaseAsync = () => ({ type: INCREASE_ASYNC });
const decreaseAsync = () => ({ type: DECREASE_ASYNC });

export { increase, decrease, increaseAsync, decreaseAsync };
