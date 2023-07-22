
import Topbar from '../components/Topbar'
import Sidebar from '../components/sidebar/Sidebar'
import Rightbar from '../components/rightbar/Rightbar'
import Feed from '../components/feed/Feed'
import './Home.css'

export default function Home() {
  return (
    <div>
    

      <Topbar />
      <div className="feedCOntainer">
      <Sidebar />
      <Feed />
      <Rightbar />
      </div>
    
    </div>
  )
}
