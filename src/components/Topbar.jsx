
import {Search ,MessageCircle ,User2 ,Bell} from 'lucide-react'
import "./Topbar.css"
const Topbar = () => {
  return (
    <div className="toobarContainer">
        <div className="topleft">
            <h1>Facebook</h1>
        </div>
        <div className="topcenter">
            <div className='centrItem'>
               
                <Search className='Seacricon' />
                <input className="SeachIcon" type="text" placeholder='Seacrh.... ' />
            </div>
        </div>
        <div className="topright">
            <div className="topbarlinks">
               <span className="topbarlink">Homepage</span>
               <span className="topbarlink">TimeLine</span>
            </div>
            <div className='topbarIcons'>
                <div className="topbarIConitm">
                   <MessageCircle />
                    <span className="tobbariconbadge">2</span>
                </div>
                <div className="topbarIConitm">
                <User2 />
                    <span className="tobbariconbadge">1</span>
                </div>
                <div className="topbarIConitm">
                <Bell />
                  
                </div>
                <div className='imgContainer'>
                    <img className='imgId' src="./assets/profiles/profile3.jpg" alt="" />
                </div>
            </div>
        
        </div>
      
    </div>
  )
}

export default Topbar
