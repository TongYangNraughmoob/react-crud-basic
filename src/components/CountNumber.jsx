import React, { useState } from 'react'
import ButtonConmponents from './ButtionConmponents';

export default function CountNumber() {
  const [conun,setCount] = useState(0);

  return (
    <div>
        {conun} <br />
        <ButtonConmponents onClick={() => setCount(conun + 1)} text="Count Number" type="button" background='green' />
    </div>
  )
}
