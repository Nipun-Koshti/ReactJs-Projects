import React, { useState } from 'react'
import "../style/HiddenSerchBar.css"

import { FaSearch } from "react-icons/fa"


const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false);
    const [bgColor, setBgColor] = useState('white');

    const handelClick = (e) => {
        setBgColor("#1a1a1a")


        if (e.target.className === 'container') {
            setShowInput(false);
            setBgColor("#fff");
        }
    }


    return (
        <section className="container" style={{ backgroundColor: bgColor }} onClick={handelClick}>
            {showInput ? (
                <input type="text" placeholder='searching....' />
            ) : (
                <FaSearch onClick={() => setShowInput(true)} />
            )}
        </section>
    )
}

export default HiddenSearchBar
