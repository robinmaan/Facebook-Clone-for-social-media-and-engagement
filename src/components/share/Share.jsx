import './Share.css'
import {Youtube,MapPin,Bookmark,Smile} from 'lucide-react'

const Share = () => {
  return (
    <div className='sharefeed'>
        <div className="feedwrappers">
          <span className="wreapfeed">
          <img className='imgofperson' src="./assets/profiles/profile2.jpg" alt="" />
            <input className='personName' placeholder="what's in your mind today..." />
          </span>
          <hr  className='breakingLine'/>
           <ul className='idicons'>
            <li className='lists'>
                <Youtube/>
                <span>Photo</span>
            </li>
            <li className='lists'>
            <MapPin  htmlColor="green"/>
                <span>
                Location
                </span>
            </li>
            <li className='lists'>
            <Bookmark />
                <span>
                Tag
                </span>
            </li>
            <li className='lists'>
            <Smile />
                <span>
                Emojie
                </span>
            </li>
            <li>
                <button className='idBtn' >Show</button>
            </li>
           </ul>

        </div>
      
    </div>
  )
}

export default Share
