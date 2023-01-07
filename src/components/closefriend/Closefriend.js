import React from 'react';

const Closefriend = ({userName,profilePicture}) => {
  return (
    <div className="sidebarFriend">
    <img className="sidebarFriendImg" src={profilePicture} alt=""/>
    <span className="sidebarFriendName">{userName}</span>
  </div>
  );
}

export default Closefriend;
