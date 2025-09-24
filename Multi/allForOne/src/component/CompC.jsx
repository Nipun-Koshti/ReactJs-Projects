import React from 'react'
import { Data } from '../App'



const CompC = () => {
    return (
        <Data.Consumer>
            

            {(name) =>{
                <div>
                <h1>Just Do it.....</h1>

                </div>
                return <h1>{name}</h1>
            }}

        </Data.Consumer>

    )
}

export default CompC
