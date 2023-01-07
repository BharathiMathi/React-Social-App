import React,{useState} from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import {Users} from "../../dummyData";

const Post = ({desc,date,like,img,comments,id}) => {
    const user = Users.find((user)=>user.id===id);
    const [likes,setLikes] = useState(like);
    const [isLiked,isSetLiked] = useState(false);

    const likeHandler = ()=>{
        setLikes(prevLikes => isLiked ? prevLikes -1 : prevLikes+1)
        isSetLiked(prevIsLiked=> !prevIsLiked)
    }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" alt="" src={user?.profilePicture} />
            <span className="postUserName">{user?.userName}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopright">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
            <span className="postText">{desc}</span>
            <img className="postImg" src={img} alt=""/>
        </div>
        <div className="postBottom">
        <div className="postBottomLeft">
            <img className="postLikeIcon" src="assets/Like.PNG" onClick={likeHandler} alt=""/>
            <img className="postLikeIcon" src="assets/Heart.PNG" alt=""/>
            <span className="postLikeCounter">{likes}</span>
        </div>
        <div className="postBottomRight">
            <span className="postComments">{comments}</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
