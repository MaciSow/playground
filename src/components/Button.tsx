import React from "react";

type ButtonProps = {
    text?: string;
}

const Button = ({text}: ButtonProps) => <button className='magic'>{text}</button>

export default Button;