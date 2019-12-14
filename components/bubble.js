import React, { useState, useEffect } from 'react'
import '../styles/bubble.css'

const Bubble = props => {
  const [size, setSize] = useState(500)
  const [ticker, setTicker] = useState(true)
  const [delay, setDelay] = useState(2000)

  useEffect( () => {
    setInterval( () => {
      setTicker(false)
    }, 750)
  }, [])

  useEffect( () => {
    if(!ticker){
      setSize(size - 20)
      setTicker(true)
    }
  }, [ticker])

  return (
    <div
      style={{ height: size, width: size }}
      className={'bubble'}
      onClick={() => {
        setSize(size + 200)
      }}
    />
  )
}

export default Bubble
