import { createContext, useContext, useState } from "react";

const ChatacterAnimationContext = createContext({});

export const ChatacterAnimationProvider = (props) => {

  const [animationIndex, setAnimationIndex] = useState(0);
  const [animations, setAnimations] = useState([]);

  return <ChatacterAnimationContext.Provider value={{
    animationIndex,
    setAnimationIndex,
    animations,
    setAnimations,
  }}>
    {props.children}
  </ChatacterAnimationContext.Provider>
}

export const UseCharacterAnimations = () => {
  return useContext(ChatacterAnimationContext)
}