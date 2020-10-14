import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import Avatar from "@material-ui/core/Avatar";

function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000 + 1));
    }, []);

    const createChat = () => {
        const roomName= prompt("Please enter the name of the new room you want to create");

        if(roomName){
            //Firebase
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat;
