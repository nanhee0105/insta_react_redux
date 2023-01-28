import './App.css';
import { useSelector } from "react-redux";

function Test(){
  let a = useSelector((state) => state.user ) 
  console.log(a)
}

function App() {
  
  Test();
  return (
    <div className="App">
      gg
    </div>
  );
}

export default App;
