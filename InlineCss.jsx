import React from 'react'

const InlineCss = () => {
    let styleObj = {
        color:"yellow",
        backgroundColor:"pink",
        border:"2px solid red"
    }
  return (
    <div>
        <h1>Inline <span style={{color:"red",backgroundColor:"yellow"}}>CSS</span></h1>
        <h1 style={styleObj}>GOOD MORNING</h1>
    </div>
  )
}

export default InlineCss