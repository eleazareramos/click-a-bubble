import React, { useState, useEffect } from 'react'
import '../styles/bubble.css'

const Bubble = props => {
  const [color, setColor] = useState('red')
  const [size, setSize] = useState(100)
  const [gameOver, setGameOver] = useState(false)
  const [text, setText] = useState('')

  const handleClick = () => {
    if (color == 'red') {
      setSize(size + 50)
    }
  }

  useEffect(() => {
    if (size >= 500) {
      setGameOver(true)
      setText('You win!')
    }
  }, [size])

  return (
    <div
      className="bubble"
      onClick={handleClick}
      style={
        gameOver
          ? {
              height: 50,
              width: 50,
              backgroundColor: 'green'
            }
          : {
              height: size,
              width: size,
              backgroundColor: color
            }
      }
    >
      {text}
    </div>
  )
}

export default Bubble
