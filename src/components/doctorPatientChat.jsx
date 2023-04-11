import React, { useState, useEffect } from "react";

const DoctorPatientChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [user1, setUser1] = useState("User 1");
  const [user2, setUser2] = useState("User 2");

  const handleSendMessage = () => {
    if (inputMessage !== "") {
      setMessages([...messages, { user: user1, text: inputMessage }]);
      setInputMessage("");
    }
  };

  useEffect(() => {
    // Simulating messages from User 2
    // setTimeout(() => {
    //   setMessages([
    //     ...messages,
    //     { user: user2, text: "Hello from User 2!" },
    //   ]);
    // }, 3000);
  }, [messages]);

  return (
    <div>
      <h1>Chat Box</h1>
      <div className="messages-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.user === user1 ? "message-user1" : "message-user2"
            }`}
          >
            <p>{message.user}: {message.text}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default DoctorPatientChat;
