import { DECREASE, INCREASE } from '../type/type';

const increase = () => {
  return { type: INCREASE };
};

const decrease = () => {
  return { type: DECREASE };
};

export { increase, decrease };
