import React, { createContext, useState } from 'react'
import run from '../gemini'

export const dataContext = createContext()

const UserContext = ({ children }) => {
  const [input, setInput] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resultArray, setResultArray] = useState([])
  const [chatHistory, setChatHistory] = useState([[]])
  const [activeChatIndex, setActiveChatIndex] = useState(-1)

  const loadPreviousChat = (index) => {
    setResultArray(chatHistory[index]);
    setShowResult(true);
    setActiveChatIndex(index);
  }

  function newChat() {
    setInput('')
    setShowResult(false)
    setLoading(false)
    if (resultArray.length) {
      setChatHistory(prev => [...prev, resultArray])
      setResultArray([])
    }
  }

  async function sent(prompt) {
    setLoading(true)
    setShowResult(true)
    setResultArray(prev => [...prev, input])
    const response = await run(prompt)
    setResultArray(prev => [...prev, response.split('**') && response.split('*')])
    setLoading(false)
  }

  const data = {
    sent,
    input,
    setInput,
    showResult,
    loading,
    resultArray,
    newChat,
    chatHistory,
    loadPreviousChat,
    activeChatIndex
  }

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext
