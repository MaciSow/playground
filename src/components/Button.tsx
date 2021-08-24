import React from "react";
import './Button.css'

type ButtonProps = {
    text?: string;
}

const Button = ({text}: ButtonProps) => <button className='normal magic'>{text}</button>

export default Button;