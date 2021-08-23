import React from "react";
import './Button.css'

type ButtonProps = {
    text?: string;
}

const Button = ({text}: ButtonProps) => <button className='magic wide'>{text}</button>

export default Button;