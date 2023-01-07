import React from 'react';
import "./rightbar.css"

const Rightbar = () => {
  return (
    <div className='rightBar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='assets/gift.png' alt=''/>
          <span className='birthdayText'><b>Pola Foster</b> and <b>3 other friends</b> have birthday today</span>
        </div>
      </div>
      
    </div>
  );
}

export default Rightbar;
