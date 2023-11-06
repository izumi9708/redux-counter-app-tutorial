import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmont } from './redux/counterSlice';

function App() {

  // reduxのhook　アクセスするためのフック
  const count = useSelector((state) => (state as any).counter.value);
  // actionをstoreに通知する
  const dispatch = useDispatch();

  //入力された値
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <input onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount}/>
      <button onClick={() => dispatch(increment())}>＋</button>
      <button onClick={() => dispatch(decrement())}>ー</button>
      <button onClick={() => dispatch(incrementByAmont(Number(incrementAmount)))}>追加</button>
    </div>
  );
}

export default App;
