import React from 'react';
import '../../assets/global.css';
import './style.css';

interface ButtonProps {
  onClick: any
  value: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({onClick, value}) => {
  return (
    <div className="button">
        <button onClick={onClick}>{value}</button>
    </div>
  );
}

export default Button;