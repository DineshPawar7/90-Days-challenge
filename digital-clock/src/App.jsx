import React, {useEffect, useState} from 'react'

const App = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());

    }, 1000)

    return () => clearInterval(intervalId);
  }, [])
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-[#ddd] rounded-full w-32 h-32 flex border-2 border-black items-center justify-center">
    <h1 className="text-center text-lg font-bold">
      {time.toLocaleTimeString()}
    </h1>
  </div>
</div>

  )
}

export default App