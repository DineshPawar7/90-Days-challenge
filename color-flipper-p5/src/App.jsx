import React, {useState} from 'react'

const App = () => {
  const colors = ['red', 'black', 'green', 'yellow']
  const [color, setColor] = useState('gray')

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    setColor(colors[randomIndex])
  }
  return (
    <div className='App' style={{ backgroundColor: color, height: `100vh`}}>
      <h1>bg color: {color}</h1>
      <button className='bg-[red]' onClick={handleClick}>click</button>
    </div>
  )
}

export default App