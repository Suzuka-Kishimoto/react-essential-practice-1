import React, {Fragment} from 'react'
import './index.css'; // CSSファイルの正しいパスを指定
import Logo from './assets/header-logo.png'
function App() {
  return (
    <div id="header">
      <img src={Logo} alt="Logo"/>
      <h1>React Investment Calculator</h1>
    </div>
  )
}

export default App
