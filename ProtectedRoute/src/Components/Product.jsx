import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>
            Hello
        </h1>

        <button onClick={()=>navigate('/cart')}>
            Cart
        </button>

        <button onClick={()=>navigate('/dashboard')}>
            Dashboard
        </button>
    </div>
  )
}

export default Product