import './Rightbar.css'
import {Gift} from 'lucide-react'
import {Users} from '../../Dummydata'
import Online from '../onlineuser/Online'


function Rightbar(){
  return (
    <div className='rightcontainer'>
      <div className="rightsidewrapper">
         <div className="rightbirthdaycontainer">
          <Gift className='girimg'/>
          <span className="birthdaytext">
            <b>Pola farter</b> and <b> 3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarimg' src="./assets/profiles/profile34.jpg" alt="" />
        <h3 className='onlinefriends'>Online Friends</h3>
        <ul className="rightbarfriendslists">
           {Users.map((u) =>(
            <Online key={u.id} user={u}/>
           ))}
      
        </ul>
          
        
      </div>
    </div>
  )
}

export default Rightbar
