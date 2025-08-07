import React, { useContext } from 'react'
import './ChatSection.css'
import { LuSendHorizontal } from 'react-icons/lu'
import { dataContext } from '../../context/UserContext'
import user from '../../assets/user.png'
import ai from '../../assets/ai.png'

const ChatSection = () => {
  const { sent, input, setInput, showResult, loading, resultArray, activeChatIndex } = useContext(dataContext)

  return (
    <div className='chatsection'>
      <div className="topsection">
        {!showResult ? (
          <div className="headings">
            <span>HELLO DEAR,</span>
            <span>I'm Your Own Assistant</span>
            <span>What can I help you....?</span>
          </div>
        ) : (
          <div className='result'>
            {resultArray.map((result, index) => (
              <div className='box' key={`${activeChatIndex}-${index}`}>
                {index % 2 === 0 ? (
                  <>
                    <img src={user} alt="User" width='60' />
                    <p>{result}</p>
                  </>
                ) : (
                  <>
                    <img src={ai} alt="AI" width='60' />
                    <p>{result}</p>
                  </>
                )}
              </div>
            ))}
            {loading && (
              <div className="box">
                <img src={ai} alt="AI" width='60' />
                <div className='loader'><hr /><hr /><hr /></div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bottomsection">
        <input type="text" placeholder='Enter a prompt' value={input} onChange={(e) => setInput(e.target.value)} />
        <button id='sendbtn' disabled={!input} onClick={() => {
          sent(input)
          setInput('')
        }}><LuSendHorizontal /></button>
      </div>
    </div>
  )
}

export default ChatSection
