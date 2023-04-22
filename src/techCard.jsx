import React from 'react'

export default function TechCard(props) {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        {props.children}
        <div className='text-center py-5 text-xl capitalize'>
            <h1>{props.title}</h1>
        </div>
    </div>
  )
}
