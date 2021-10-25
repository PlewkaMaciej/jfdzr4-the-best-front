import { createContext, useState, useContext } from "react";

export const MessageContext = createContext(null);

export const MessageContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  return (
    <MessageContext.Provider
      value={{ open, setOpen, message, setMessage, color, setColor }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageContext = () => useContext(MessageContext);
