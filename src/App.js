import { useSelector } from 'react-redux';
import './App.css';
import Counter from './components/Counter';

function App() {
  const count2 = useSelector((state) => state.num);
  return (
    <div className="App">
      <Counter />
      <div>카운트2</div>
      <div>{count2}</div>
    </div>
  );
}

export default App;
