import React from 'react'

const Button = (props) => <button onClick={props.handleClick} style={props.styleButton}>{props.text}</button>

export default Button;