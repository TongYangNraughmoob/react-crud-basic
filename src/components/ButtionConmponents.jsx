import React from 'react'

export default function ButtonConmponents(props) {
    const {text, type, background, onClick}=props;
  return (
    <button onClick={onClick} type={type} style={{background: background ? background:"#fff", color:'#fff'}}>
        {text}
    </button>
  )
}
