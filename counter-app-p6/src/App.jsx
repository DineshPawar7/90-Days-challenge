import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='text-center p-[2rem]'>
      <h1>Simple Counter</h1>
      <h3>test commit</h3>
      <h2>simple test to merge</h2>
      <p>Count: {count}</p>
      <button className='m-1 px-2' onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default App