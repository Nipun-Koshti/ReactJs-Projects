import React from 'react'
import useFood from '../context/FoodContextProvider'

const Food = () => {

    const Food = useFood()
  return (
    <div>{Food}</div>
  )
}

export default Food