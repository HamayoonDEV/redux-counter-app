import { useSelector,useDispatch } from 'react-redux';
import {actions} from './store/index'

function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch();

  function increament(){
    dispatch(actions.increament())

  }
  function decreament(){
    dispatch(actions.decreament())
  }
  const add=()=>{
    dispatch(actions.add(10))
  }
  return (
    <div >
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increament}>increase</button>
      <button onClick={decreament}>decrease</button>
      <button onClick={add}>Add + 10 </button>
    </div>
  );
}

export default App;
