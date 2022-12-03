
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Parants from './Components/Parants';
import { createContext, useState } from 'react';
import Counter from './Components/Counter';
import LoginForm from './Components/LoginForm';

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(10);
  const value = { count, setCount }

  return (
    /*    <COUNTER_CONTEXT.Provider value={value}>
         <div className="App">
            <h1>Grant: {count}</h1> 
           <Parants />
         </div>
       </COUNTER_CONTEXT.Provider> */
    <div>
      {/*    <Counter/> */}
      <LoginForm />
    </div>
  );
}

export default App;
