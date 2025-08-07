import React, { useEffect, useState } from 'react'
import './ThemeBtn.css'
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const ThemeBtn = () => {
  const [mode, setMode] = useState('dark-mode')
  const [dark, setDark] = useState(false)
  
  function toggle() {
    if (mode === 'dark-mode') {
      setMode('light-mode')
      setDark(true)
    } else {
      setMode('dark-mode')
      setDark(false)
    }
  }

  useEffect(()=>{
    document.body.className = mode
  },[mode])
  
  return (
    <button className='themeBtn' onClick={toggle}>
      {dark ? <FaMoon /> : <MdOutlineWbSunny />}
    </button>
  )
}

export default ThemeBtn
