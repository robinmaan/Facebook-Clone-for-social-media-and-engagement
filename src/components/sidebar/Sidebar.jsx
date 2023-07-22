import './Sidebar.css'
import {Rss,MessageCircle,MonitorPlay,Users2,Kanban,Bookmark,HelpCircle,Code2} from 'lucide-react'
import {Users} from '../../Dummydata'
import Closefriend from '../closefrined/Closefriend'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarwrapper">
        <ul className="sidebarList">
            <li className='sidebarlinks'>
               <Rss />
                <span className='sidebarnames'>Feed</span>
            </li>
            <li className='sidebarlinks'>
            <MessageCircle />
                <span className='sidebarnames'>Chat</span>
            </li>
            <li className='sidebarlinks'>
            <MonitorPlay />
                <span className='sidebarnames'>Video</span>
            </li>
            <li className='sidebarlinks'>
            <Users2 />
                <span className='sidebarnames'>Group</span>
            </li>
            <li className='sidebarlinks'>
            <Kanban />
                <span className='sidebarnames'>Job</span>
            </li>
            <li className='sidebarlinks'>
            <Bookmark />
                <span className='sidebarnames'>Bookmark</span>
            </li>
            <li className='sidebarlinks'>
            <HelpCircle />
                <span className='sidebarnames'>Quetions</span>
            </li>
            <li className='sidebarlinks'>
            <Code2 />
                <span className='sidebarnames'>Cources</span>
            </li>
        </ul>

        <button className="showmore" >Show More</button>
        <hr  className='showmoreline'/>
        <ul className="friendsList">
            {Users.map((u)=>(
                <Closefriend key={u.id} user={u} />
            ))}
           
            
           
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
