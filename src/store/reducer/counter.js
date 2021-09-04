import { DECREASE, INCREASE } from '../type/type';
const initialState = {
  num: 15,
  name: '안녕',
};
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, number: state.num + 1 };
    case DECREASE:
      return { ...state, number: state.num - 1 };
    default:
      return state;
  }
}

export default counter;
