import React from 'react'

const Comment = ({data}) => {
    const {name , text , replies} = data;
  return (
    <div className='flex p-2 shadow-sm bg-slate-100 rounded-lg'>
      <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="comment logo" />

      <div className='px-3 text-sm rounded-lg'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Comment
