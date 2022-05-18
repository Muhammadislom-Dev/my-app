import './App.css';
import Card from './Card';
import React, {useState} from 'react';
import Data from './Data';
import Todo from './Todo';


export default function App() {
  const [active, setActive] = useState("firstcard");

  return (
    <div className="App"> 
      {/* <nav>
        <button onClick={() => setActive("firstcard") }>One</button>
        <button onClick={() => setActive("secondcard") }>two</button>
        <button onClick={() => setActive("thirstcard") }>three</button>
      </nav>

      <div>
        {active === "firstcard" && <Card data={Data} cardIndex={0} /> }
        {active === "secondcard" && <Card data={Data} cardIndex={1} /> }
        {active === "thirstcard" && <Card data={Data} cardIndex={2} /> }
      </div> */}
      
          <Todo />
    </div>
   
  );
}


