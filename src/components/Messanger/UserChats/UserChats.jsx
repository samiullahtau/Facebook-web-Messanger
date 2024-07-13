import "./userChats.css"
import Create from "../../../assets/Icons/Create.ico"
import Search from "./Search/Search"
import Friends from "./Friends/Friends"

const UserChats = ({ setSelectedFriend }) => {
    return (
        <div className="userchats">
            <div className="chatheader">
                <h1>Chats</h1>
                <button className="icons">
                    <img src={Create} alt="Create" />
                </button>
            </div>
            <div>
                <Search />
            </div>

            <div className="friends">
                <button className="btn" type="button">Inbox</button>
                <button className="btn" type="button">Communites</button>
            </div>
            <Friends setSelectedFriend={setSelectedFriend} />
        </div>
    )
}

export default UserChats
