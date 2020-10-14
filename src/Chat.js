import React, { useState, useEffect } from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000 + 1));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        setInput("")
    };

    const createChat = () => {
        const roomName = prompt(
            "Please enter the name of the new room you want to create"
        );

        if (roomName) {
            //Firebase
        }
    };
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headerIcons">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}>
                    <span className="chat__name">Vinith Prabhu</span>
                    Hey guys
                    <span className="chat__timestamp">2:55pm</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon className="footer__icon" />
                <form action="" method="post">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Type a message"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit" onClick={sendMessage}>
                        Send a message
                    </button>
                </form>
                <MicIcon className="footer__icon" />
            </div>
        </div>
    );
}

export default Chat;
