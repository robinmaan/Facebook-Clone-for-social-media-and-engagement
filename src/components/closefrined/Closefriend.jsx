import "./Closefriend.css"

const Closefriend = ({user}) => {
    return (
        <li className='friendsists'>
            <img className='imagesofFriend' src={user.profilePicture} alt="" />
            <span className='nameoffriend'>{user.username}</span>
        </li>

    )
}

export default Closefriend
