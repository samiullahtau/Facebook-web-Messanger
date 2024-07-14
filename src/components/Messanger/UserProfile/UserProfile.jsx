import "./userProfile.css"
import MaleProfile from "../../../assets/Icons/MaleProfile.ico"
import FemaleProfile from "../../../assets/Icons/FemaleProfile.ico"
import Notification from "../../../assets/Icons/Notification.ico"
const UserProfile = ({ data }) => {
    return (
        <div className="userprofile">
            <div className="profileavatar">
                <img src={data?.pictureUrl} alt="" className="profileimg" />
                <h1>{data?.username}</h1>
                <button className="btn" >
                    end-to-end encrypted
                </button>
            </div>
            <div className="iconscontainer">
                <button className="icons">
                    <img src={(data?.gender === "male") ? MaleProfile : FemaleProfile} alt="notification" />
                </button>
                <button className="icons">
                    <img src={Notification} alt="notification" />
                </button>
            </div>

        </div>
    )
}

export default UserProfile;
