import "./Post.css";
import {Users} from '../../Dummydata'
import {useState} from 'react'
import { MoreVertical, Heart, ThumbsUp , ThumbsDown } from "lucide-react";

const Post = ({post}) => {
    const [like,setLike] = useState(34)
    const [fillColor, setFillColor] = useState('#000')
    const [fillColorthumb, setFillColorthumb] = useState('#000')
    const [iconColor, setIconColor] = useState('#333');
    
    const handleThumbLikes = ()=>{
        setLike((prev)=>prev+1)

        setFillColorthumb(fillColorthumb === 'black' ? 'blue' : 'black');  
    }

   const handleLikes = ()=>{
   setLike((prev)=>prev+1)
   setFillColor(fillColor === 'black' ? 'red' : 'black');  
   setIconColor(iconColor === '#fff' ? 'red' : '#fff')
//    const style = {  color:'red',fill:'red' }
   }
   const dislikebtn = ()=>{
    setLike((prev)=>prev-1)

   }
   

    return (
        <div className="postscontainer">
            <div className="postWrapper">
                <div className="posttop">
                    <div className="postLeft">
                        <img
                            className="Imgfeed"
                            src={Users.filter((a)=> a.id === post?.userId)[0].profilePicture}
                            alt=""
                        />
                        <span className="postName">{Users.filter((a)=> a.id === post?.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopright">
                        <MoreVertical className="iconformore" />
                    </div>
                </div>
                <div className="posttopcenter">
                    <span className="postText">{post.desc}</span>
                    <img className="feedimg" src={post.photo} alt="" />
                </div>
                <div className="posttopbottom"></div>
                <div className="postbottomleft">
                    <Heart fill={fillColor}  fillRule={iconColor} className="likebbtn"onClick={handleLikes}/>
                    <ThumbsUp fill={fillColorthumb} className="likesbtn"onClick={handleThumbLikes}/>
                    <ThumbsDown className="dislikebtn" onClick={dislikebtn} />
                    
                    <span className="likesCounter"> {like} people likes it </span>
                    <div className="postbottomright">
                    <span className="comments">{post.comment} Comments</span>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Post;
