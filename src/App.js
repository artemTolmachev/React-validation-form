
import './App.css';
import {useRef, useState} from 'react';

function App() {

 let users = [
    {id: 1, name: 'Dmitry'},
    {id: 2, name: 'Anton'},
    {id: 3, name: 'Slava'},
    {id: 4, name: 'Denis'}
  ]
  const [user, useUser] = useState(users)
  let inputRef = useRef();

  let ChangeName = () => {
    let newobj = users.filter(item => item.name.toLowerCase().includes(inputRef.current.value.toLowerCase()))
    useUser(newobj)
  }

  return (
    <>
      <div className="container">
        {user.map(item => <li>{item.name}</li>)}
        <input type="text" ref={inputRef} />
        <button onClick={ChangeName}>click</button>
      </div>
    </>
  );
}

export default App;
