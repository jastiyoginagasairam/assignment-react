import React from 'react'

const App = () => {
  const[count,setCount]=React.useState(0);
  return (
    <center>
      {count}<br/>
      <button onClick={()=>setCount(count+1)}>Increase number</button>
    </center>
  )
}

export default App
