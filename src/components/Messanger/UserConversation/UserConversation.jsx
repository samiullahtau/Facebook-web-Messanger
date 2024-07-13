import "./userConversation.css"
import Header from "./ChatHeader/Header"
import Footer from "./ChatFooter/Footer"
const UserConversation = () => {
    const myID = "0"
    const messages = [{
        message: "Hi How are you",
        Id: "0"
    },
    {
        message: "I am Fine",
        Id: "1"
    }, {
        message: "Where are you from",
        Id: "0"
    }, {
        message: "I Am From Argentina",
        Id: "1"
    }, {
        message: "oh nice! its a beutiful country",
        Id: "0"
    }, {
        message: "Thanks!",
        Id: "1"
    }
    ]


    return (
        <div className="userconversation">
            <Header />
            {
                messages.map((chats, index) => (
                    (chats.Id === myID) ?
                        <div className="messagesender">
                            {chats.message}
                        </div> : <div className="messagereciver">
                            {chats.message}
                        </div>
                ))
            }
            <Footer />


        </div>

    )
}

export default UserConversation
