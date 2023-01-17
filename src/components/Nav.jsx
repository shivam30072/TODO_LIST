import React from 'react';
import '../Styles.css';

const Nav = () => {
  return (
    <div className='navbar'>
        <div className='nav-left'>
              <h2>logo</h2>
        </div>
        <div className='nav-right'>
           <button className='signUp'>Sign Up</button>
        </div>
    </div>
  )
}

export default Nav