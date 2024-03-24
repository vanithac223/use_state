'use client'
import React, { useEffect, useState } from 'react'

export default function Parent() {
    const [change, setchange]=useState(0)
    const [changeclr, setchangeclr]=useState()
    useEffect(()=>{
        document.title={change}
    },[change])
  return (
    <div className='text-center flex bg-red-700'>
      <button onClick={()=>{setchange(change + 1)}}>+</button>
      <p>{change}</p>
      <p className={changeclr ? "sundar" :"red"}>colour</p>
      <button onClick={()=>{setchangeclr(!changeclr)}}>changed colour</button>
    </div>
  )
}
