import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
const [taco, setTaco] = useState([])

useEffect(() => {
  fetch('/users')
  .then((r) => r.json())
  .then(setTaco);
}, [])

 console.log(taco)

  return (
    <div>
      
    </div>
  );
}

export default App;
