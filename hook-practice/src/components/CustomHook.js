import React, { useState, useEffect } from 'react'

function useWindowWidth () {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return width
}

export function Comp1 (props) {
  const width = useWindowWidth()
  return <div>Comp1: {width}</div>
}

export function Comp2 (props) {
  const width = useWindowWidth()
  return <div>Comp2: {width}</div>
}
