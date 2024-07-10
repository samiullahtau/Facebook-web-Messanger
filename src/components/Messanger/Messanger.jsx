import UserChats from "./UserChats/UserChats"
import UserConversation from "./UserConversation/UserConversation"
import UserProfile from "./UserProfile/UserProfile"
import "./messanger.css"

const Messanger = () => {
    return (
        <div className="messanger">
            <UserChats />
            <UserConversation />
            <UserProfile />
        </div>
    )
}

export default Messanger;
