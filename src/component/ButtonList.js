import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All" , "Gaming" , "Cricket" , "cooking" , "Valentines" , "Song" , "Soccer","News","Web development","Football","T-series" , "Kapil"]
  return (
    <div className='flex'>
      {
        list.map((btnList)=>
          <Button name={btnList}/>
        )
      }
      
    </div>
  )
}

export default ButtonList
