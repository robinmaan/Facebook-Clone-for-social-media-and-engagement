import './Profile.css'
import Topbar from '../Topbar'
import Sidebar from '../sidebar/Sidebar'
import Rightbar from '../rightbar/Rightbar'
import Feed from '../feed/Feed'
const Profile = () => {
  return (
    <div className='mainContainer'>
      <Topbar />
      <div className="profieSection">
        <Sidebar />
        <div className='profileBarmain'>
          <div className="topbarprofile">
            <div className="profileframe">
              <img className='profleupperimg' src="./assets/profiles/profile12.jpg" alt="" />
              <img className='profilelowerimg' src="./assets/profiles/profile33.jpg" alt="" />
            </div>
            <div className="profileinfo">
              <h3 className='profileName'>Robin Maan</h3>
              <span className="profileotherinfo">Web Developer</span>
            </div>
          </div>
          <div className="bottomprofilebar">
          <Feed />

          <Rightbar />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Profile
