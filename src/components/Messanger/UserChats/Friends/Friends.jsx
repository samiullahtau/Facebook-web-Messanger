import "./friends.css";
const Friends = () => {
    const friendsList = [
        {
            ID: "001",
            username: 'John Doe',
            pictureUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
            description: "Messanger Updated the security"

        },
        {
            ID: "002",
            username: 'Jane Smith',
            pictureUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
            description: "Messanger Updated the security"
        },
        {
            ID: "003",
            username: 'Sam Wilson',
            pictureUrl: 'https://randomuser.me/api/portraits/men/65.jpg',
            description: "Messanger Updated the security"
        },
        {
            ID: "004",
            username: 'Emily Jones',
            pictureUrl: 'https://randomuser.me/api/portraits/women/63.jpg',
            description: "Messanger Updated the security"
        },
        {
            ID: "004",
            username: 'Michael Brown',
            pictureUrl: 'https://randomuser.me/api/portraits/men/60.jpg',
            description: "Messanger Updated the security"
        }
    ];

    return (
        <div className="friends-list">
            {friendsList.map((friend, index) => (
                <div key={index} className="card">
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
