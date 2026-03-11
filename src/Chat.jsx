import React, { useState } from "react";
import "./Chat.css";

function Chat() {

  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (inputValue.trim() === "") return;

    setMessages([...messages, inputValue]); 
    setInputValue("");
  };

  return (
    <div className="chat-container">

      <h2>Mini Chat Application</h2>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type Message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={handleSend}>
          Send Message
        </button>
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <p key={index} className="message">
            {msg}
          </p>
        ))}
      </div>

    </div>
  );
}

export default Chat;