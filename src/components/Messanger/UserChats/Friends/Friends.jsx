import { MessengerData } from "../../../../constants/Messenger";
import "./friends.css";


const Friends = ({ setSelectedFriend }) => {

    return (
        <div className="friends-list">
            {MessengerData.map((friend, index) => (
                <div key={index} className="card" onClick={() => setSelectedFriend(friend.ID)}>
                    <img src={friend.pictureUrl} alt={friend.username} className="profile-pic" />
                    <div className="info">
                        <span className="username">{friend.username}</span>
                        <span className="description">{friend.description}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Friends;
