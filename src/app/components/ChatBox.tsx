"use client";

import { useState } from "react";
import { MessageSquare, X } from "lucide-react"; // Import icons
import { log } from "console";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput(""); // Clear input after sending
      console.log(input); // log input in console for testing purposes
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* Chat Toggle Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chatbox UI */}
      {isOpen && (
        <div className="mt-2 w-80 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
          <div className="h-40 overflow-y-auto border-b border-gray-300 pb-2">
            {messages.map((msg, index) => (
              <div key={index} className="p-2 bg-gray-100 my-1 rounded-md">
                {msg}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="w-full flex gap-2 mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border rounded-md p-2 text-lg"
              placeholder="Send message..."
            />
            <button
              onClick={sendMessage}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
