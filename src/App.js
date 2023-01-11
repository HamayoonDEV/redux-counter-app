
import { useSelector,useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch();

  function increament(){
    dispatch({type:"INC"})

  }
  function decreament(){
    dispatch({type:"DEC"})
  }
  return (
    <div >
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increament}>increase</button>
      <button onClick={decreament}>decrease</button>
    </div>
  );
}

export default App;
