import React, { useState, useEffect } from "react";
import "../styles/bubble.css";

const Bubble = props => {
const [color, setColor] = useState('red')
const [interval, intervalSet] = useState(2000)


  const randNum = () => Math.floor(Math.random() * 4)
  const colors = [
      'red',
      'yellow',
      'blue',
      'green'
  ]
  useEffect(() => {
      setInterval(function changeColor() {
        setColor(colors[randNum()]);
        console.log(color)
        intervalSet(interval - 50)
        console.log(interval)
      }, interval);
      

  }, [])

  return (<div className="bubble" style = {{backgroundColor:color}}>hello</div>);
};

export default Bubble;
