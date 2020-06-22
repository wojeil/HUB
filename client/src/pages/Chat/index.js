import React from "react";
import "./style.css";

function ChatBox (){

    return(
        <>
        <ul id="messages"></ul>
        <form action="">
          <input id="m" autocomplete="off" /><button>Send</button>
        </form>
        </>
    )
}

export default ChatBox;