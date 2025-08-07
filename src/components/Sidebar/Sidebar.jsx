import React, { useContext, useState } from 'react'
import './Sidebar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaPlus, FaRegMessage } from 'react-icons/fa6';
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import { dataContext } from '../../context/UserContext';

const Sidebar = () => {
  const [extend, setExtend] = useState(false);
  const { newChat, chatHistory, loadPreviousChat } = useContext(dataContext)

  return (
    <div className='sidebar'>
      <div id="ham" onClick={() => setExtend(!extend)}>
        <GiHamburgerMenu />
      </div>
      <div className="newchat" onClick={newChat}>
        <FaPlus />
        {extend && <p>New Chat</p>}
      </div>
      {chatHistory.map((chat, idx) => (
        chat.length > 0 && (
        <div className="recent" key={idx} onClick={() => loadPreviousChat(idx)}>
          <FaRegMessage />
          {extend && (
            <p>
              {chat[0].length > 10 ? `${chat[0].slice(0, 10)}...` : chat[0]}
            </p>
          )}
        </div>
        )
      ))}
      <ThemeBtn />
    </div>
  )
}

export default Sidebar
