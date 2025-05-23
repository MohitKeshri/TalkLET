import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import selectedConversationRef from '../utils/conversationRef';

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
	  if(newMessage.senderId===selectedConversationRef.current?._id){

	  
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);

	  }
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};
export default useListenMessages;
