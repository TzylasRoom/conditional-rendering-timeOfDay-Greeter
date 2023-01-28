import React from 'react'

const GoodMorning = (props) => {
  return (
    <div style={{fontSize:"100px", color:"black",
    backgroundColor: (props.timeOfDay==="morning") ?
     "bisque" :
     "yellow"}}>

    {props.timeOfDay==="morning" ? "Good Morning": "Good Afternoon"}

    </div>
  )
}

export default GoodMorning
