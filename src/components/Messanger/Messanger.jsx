
import { useEffect, useState } from "react"
import UserChats from "./UserChats/UserChats"
import UserConversation from "./UserConversation/UserConversation"
import UserProfile from "./UserProfile/UserProfile"
import "./messanger.css"
import { MessengerData } from "../../constants/Messenger"

const Messanger = () => {
    const [conversation, setConversation] = useState(null)

    const [selectedFriend, setSelectedFriend] = useState('1');

    useEffect(() => {
        let friend = MessengerData.find((item) => item?.ID === selectedFriend)
        setConversation(friend);
    }, [selectedFriend])


    return (
        <div className="messanger">
            <UserChats setSelectedFriend={setSelectedFriend} />
            <UserConversation conversation={conversation} />
            <UserProfile />
        </div>
    )
}

export default Messanger;
