import './Feed.css'
import Share from '../share/Share'
import Post from '../posts/Post'
import { Posts } from '../../Dummydata'
const Feed = () => {
  return (
    <div className='feedcontainer'>
      <div className="feedwrapper">
        <Share />
       {Posts.map((p)=>(
         <Post  key={p.id} post={p} />

       ))}
        
      </div>
    </div>
  )
}

export default Feed
