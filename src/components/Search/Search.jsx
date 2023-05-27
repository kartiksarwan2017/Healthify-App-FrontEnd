import React from 'react';
import "./Search.scss";
import {HiMagnifyingGlass} from "react-icons/hi2";

const Search = ({sendValue, sendEnter, sendClick}) => {

   const handleChange = (e) => {
        sendValue(e.target.value);
    }

    const keyDown = (event) => {
        if (event.key === 'Enter') {
          sendEnter();
          console.log('Enter')
        }
    }
    
    const handleClick = () => {
        sendClick();
    }

  return (
    <div className="search">
    <div className='search-box'>
      <input type='text' onChange={handleChange} onKeyDown={keyDown} placeholder='Enter food...' />
      <button onClick={handleClick} ><HiMagnifyingGlass sizes={25} style={{fontSize: 20}}/></button>
    </div>
  </div>
  )
}

export default Search;
