import OpenMore from "../../../../assets/Icons/OpenMore.ico"
import AddImage from "../../../../assets/Icons/AddImage.ico"
import ChooseSticker from "../../../../assets/Icons/ChooseSticker.ico"
import ChooseGif from "../../../../assets/Icons/ChooseGif.ico"
import Like from "../../../../assets/Icons/Like.ico"
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="chooseoptions">
                <button className="optionbtn"><img src={OpenMore} alt="" /></button>
                <button className="optionbtn"><img src={AddImage} alt="" /></button>
                <button className="optionbtn"><img src={ChooseSticker} alt="" /></button>
                <button className="optionbtn"><img src={ChooseGif} alt="" /></button>
            </div>
            <div className="messageinput">
                <input type="input" placeholder="Aa" className="inputfield" />
            </div>
            <div className="thumbsup">
                <img src={Like} alt="" />
            </div>
        </div>
    )
}

export default Footer
