
import React, { useState, useEffect } from 'react';

function HookDemo (props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])

  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>
  )
}

export default HookDemo

