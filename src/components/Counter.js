import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAsync, increaseAsync } from '../store/action/action';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  console.log(count);

  const Up = () => dispatch(increaseAsync());
  const Down = () => dispatch(decreaseAsync());
  return (
    <div>
      <div>{count}</div>
      <button onClick={Up}>+</button>
      <button onClick={Down}>-</button>
    </div>
  );
}

export default Counter;
