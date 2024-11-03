import React from 'react'
import Componet2 from './compnet2'

export default function componet1({text}) {
  return (
    <div>
        this is card 1 {text}
       <Componet2 text={text} />
    </div>
  )
}
