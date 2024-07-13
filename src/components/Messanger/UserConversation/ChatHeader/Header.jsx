import Phone from "../../../../assets/Icons/Phone.ico"
import VideoCall from "../../../../assets/Icons/VideoCall.ico"
import Info from "../../../../assets/Icons/Info.ico"
import "./header.css"
const Header = ({ data }) => {
    return (
        <div className="header">
            <div className="friend">
                <img src={data?.pictureUrl} alt="" className="profileimage" />
                <h1>{data?.username}</h1>
            </div>
            <div className="iconsrow">
                <img src={Phone} alt="" />
                <img src={VideoCall} alt="" />
                <img src={Info} alt="" />
            </div>
        </div>
    )
}

export default Header;
