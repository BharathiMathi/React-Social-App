import React from 'react';
import "./profile.css"
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

const Profile = () => {
  return (
    <>
     <Topbar />
     <div className='profileContainer'>
      <Sidebar />
      <div className='profileRight'>
      <div className='profileRightTop'>
        <div className='profileRightContainer'>
          <img className='profileCoverImg' src="assets/posts/1.jpg" alt=''/>
          <img className='profileUserImg' src="assets/person/2.png" alt=''/>
        </div>
        <div className='profileInfo'>
          <h4 className='profileUserName'>Miller</h4>
          <span className='profileDescription'>Hello friends</span>
        </div>
      </div>
      <div className='profilRightBottom'>
      <Feed/>
      <Rightbar/>
      </div>
      </div>
     </div>
    </>
  );
}

export default Profile;
