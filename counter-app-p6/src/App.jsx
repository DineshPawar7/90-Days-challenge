import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='text-center p-[2rem]'>
      <h1>Simple Counter</h1>
      <p>simple commit to test</p>
      <p>Count: {count}</p>
      <button className='m-1 px-2' onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default App