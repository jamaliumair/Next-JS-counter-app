

"use client";
import { useState } from "react"

type CountType = {
  message: string,
  count: number
}


export default function Counter({message, count}: CountType) {

  
  const [username, setUsername] = useState("Umair Jamali");
  // console.log(useState("Ziad Maju"))
  const [initCount, setInitCount] = useState(count);
  const [inputvalue, setInputvalue] = useState(1);

  const valeuHandler = (event : any) => {
    setUsername(event.target.value)
} 
  

  const changeHandler = (event: any) => {
    setInitCount(parseInt(event.target.value))
    // console.log(typeof(event.target.value));
  }

  const addHandler = () => {
    setInputvalue(inputvalue + initCount);
  };

  const minusHandler = () => {
    if (inputvalue === 0) return 
    setInputvalue(inputvalue - initCount);
  };
 
  const resetHandler = () => {
      setInputvalue(count)
      setInitCount(count)
  }
 

  return (
    <div className="container">

      <div>

    <h1>{message}</h1>
    <h2>Welcome {username}</h2>
    <div className="inputContainer">
    <input className="input" type="text" value={username} onChange={valeuHandler}/>
    
    <input className="input" type="number" value={initCount} onChange={changeHandler}/>
    <h3>{inputvalue}</h3>
    </div>

    <button onClick={addHandler}>Add</button>
    <button onClick={minusHandler}>Subtract</button>
    <button onClick={resetHandler}>Reset</button>

    </div>

    </div>
  )
}


