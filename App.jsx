import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './components/Users'

function App() {
  const [count, setCount] = useState(0)
  const [msg, setmsg] = useState("")
  useEffect (() => {console.log("count modified",count)
  let m="count modified"+String(count)
  setmsg(m)     


  },[count])
 
 
  return (
    <>
          <Users/>
      <h1 className="counter">Score Bord</h1>
      <h1 className="counter">{count}</h1>
      <button onClick={()=> setCount(count+10)}>Goal</button> 
      <button onClick={()=> setCount(count-5)}>Penalty</button>
      <button onClick={()=>setCount(0)}>EndGame</button>
      <h2>{msg}</h2>

    </>
  )
}

export default App
