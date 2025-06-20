import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = async () => {
    if (!userMessage) return;

    // Update chat with user's message
    setChatHistory((prev) => [...prev, { from: "user", text: userMessage }]);

    try {
      const response = await axios.post("https://tuuuuba0.app.n8n.cloud/webhook/mental-health-chat", {
        message: userMessage,
      });

      const botReply = response.data.reply || "Sorry, I didn't understand that.";

      setChatHistory((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch (error) {
      setChatHistory((prev) => [
        ...prev,
        { from: "bot", text: "Error connecting to the AI agent." },
      ]);
    }

    setUserMessage("");
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <div className="h-96 overflow-y-auto border p-4 rounded-lg bg-white shadow">
        {chatHistory.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${
              msg.from === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.from === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="flex-1 border rounded-l-lg px-4 py-2"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
