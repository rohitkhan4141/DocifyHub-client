/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import io from "socket.io-client";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const s = io("https://peach-fishy-gallon.glitch.me");
    setSocket(s);

    // Clean up the socket on component unmount
    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    const handleChatMessage = (message) => {
      setMessages([...messages, message]);
    };

    socket.on("chat message", handleChatMessage);
    return () => {
      socket.off("chat message", handleChatMessage);
    };
  }, [messages, socket]);

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      socket.emit("chat message", inputMessage);
      setInputMessage("");
    }
  };

  const ChatBubble = ({ msg }) => {
    return (
      <div className="chat chat-start my-3">
        <div className="chat-image avatar max-h-12">
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="avatar"
              />
            </div>
          </div>
          <div className="chat-bubble ms-3 bg-accent">{msg}</div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="flex flex-col justify-between h-screen"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/ddfwus0oi/image/upload/v1703063517/WhatsApp_Image_2023-12-18_at_10.39.43_PM_svflz5.jpg)",
      }}
    >
      <div className="mx-10">
        <h1 className="text-xl font-bold py-10">Chat Room</h1>
        <div>
          {messages.map((msg, index) => (
            <ChatBubble key={index} msg={msg} />
          ))}
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center mb-28">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <button className="btn btn-accent" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
