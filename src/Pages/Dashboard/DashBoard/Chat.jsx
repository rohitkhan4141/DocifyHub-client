/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import io from 'socket.io-client';


const Chat = () => {
    const [socket, setSocket] = useState(null);
    //   const [userId, setUserId] = useState('');

    const [message, setMessage] = useState('');
    const [receivedMessages, setReceivedMessages] = useState([]);
    const userId = 25;
    useEffect(() => {
        // Connect to the server
        const newSocket = io('http://localhost:5000'); // Change URL to your server's URL

        setSocket(newSocket);

        return () => {
            // Disconnect the socket when component unmounts
            if (socket) {
                socket.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        if (socket) {
            // Join the chat room on initial load
            socket.emit('join-chat', userId);

            // Listen for new chat messages
            socket.on('new-chat-message', (newMessage) => {
                setReceivedMessages([...receivedMessages, newMessage]);
            });
        }
    }, [socket, userId, receivedMessages]);

    const sendMessage = () => {
        socket.emit('chat-message', { userId, message });
        setMessage('');
    };

    const ChatBubble = ({ msg }) => {

        return <div className="chat chat-start my-3">
            <div className="chat-image avatar max-h-12">

                <div className="avatar online">
                    <div className="w-10 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="chat-bubble ms-3" >{msg}</div>
            </div>
        </div>
    }


    return (

        // <div className='h-screen' style={{ backgroundImage: 'url(blob:https://web.whatsapp.com/2a7f76ba-a8c7-4103-ac6f-24f07f111fe8)' }}>
        //     <div className='mx-10'>
        //     <h1 className='text-xl font-bold py-10'>Chat Room</h1>
        //     <div>
        //         {receivedMessages.map((msg, index) => (
        //             <ChatBubble key={index} msg={msg} />
        //         ))}

        //     </div>
        //     <div className='flex gap-x-3 mt-8'>
        //         <input
        //             type="text"
        //             value={message}
        //             onChange={(e) => setMessage(e.target.value)}
        //             placeholder="Type your message..."
        //             className="input input-bordered input-accent w-full max-w-xs"
        //         />
        //         <button className='btn btn-accent' onClick={sendMessage}>Send</button>
        //     </div>
        //     </div>
        // </div>
        <div className='flex flex-col justify-between h-screen' style={{ backgroundImage: 'url(blob:https://web.whatsapp.com/2a7f76ba-a8c7-4103-ac6f-24f07f111fe8)' }}>
        <div className='mx-10'>
            <h1 className='text-xl font-bold py-10'>Chat Room</h1>
            <div>
                {receivedMessages.map((msg, index) => (
                    <ChatBubble key={index} msg={msg} />
                ))}
            </div>
        </div>
        <div className='flex gap-2 items-center justify-center mb-20'>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="input input-bordered input-accent w-full max-w-xs"
            />
            <button className='btn btn-accent' onClick={sendMessage}>Send</button>
        </div>
    </div>
    );
};

export default Chat;
