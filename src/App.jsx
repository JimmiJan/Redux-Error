import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { useRef, useState } from 'react';
import UserCard from './Componets/UserCard';

function App() {
    const [inputvalue,setInputvalue]=useState("")
    const inputTag = useRef();
    const inputHandale = (e)=>{
      e.preventDefualt()
      const search = inputTag.current.value;
      setInputvalue(setInputvalue)
    }

  return (
    <div className="App">
     

      <h1>Git HUb USer Finder</h1>
      <form action="" onSubmit={inputHandale}>
        <input type="search" placeholder='Enter user Name'
          ref={inputTag}
        />
      </form>

      <UserCard inputValue={inputvalue} />
      
    </div>
  );
}

export default App;
