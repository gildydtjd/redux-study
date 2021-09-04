import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../store/action/action';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.num);

  const Up = () => dispatch(increase());
  const Down = () => dispatch(decrease());
  return (
    <div>
      <div>{count}</div>
      <button onClick={Up}>+</button>
      <button onClick={Down}>-</button>
    </div>
  );
}

export default Counter;
