
import './Online.css'

const Online = ({user}) => {
  return (
    
       
          <li className="rightbarlist">
            <div className='rightbarindividualid'>
              <img className='rightbaridimgaes' src={user.profilePicture} alt="" />
              <span className='rightbaronlineidnames'>{user.username}</span>
              <div className='onlineicons'></div>
            </div>
            
          </li>
        
   
  )
}

export default Online
