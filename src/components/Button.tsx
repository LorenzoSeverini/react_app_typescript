import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
    onClick: () => void;
}

const Button = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <div className="text-center mt-5">
        <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button