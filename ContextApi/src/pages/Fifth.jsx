import React from 'react'
import { useContext } from 'react'
import BgContext from '../context/BgContextProvider'

const Fifth = () => {
    const [bg,setBg]= useContext(BgContext)
    const handelChange = (event)=>{
        console.log(event.target.checked)
        if(event.target.checked){
            setBg("orange")
        }else{
            setBg("red")
        }
    }

    
  return (
    <div>

        <input type='checkbox' 
            onChange={handelChange}
        />

    </div>
  )
}

export default Fifth