import React from 'react'
import Componet3 from './componet3'

export default function Componet2({text}) {
  return (
    <div>
        this is card 2 {text}
        <Componet3 text={text}/>
    </div>
  )
}
