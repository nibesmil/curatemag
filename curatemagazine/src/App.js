// src/App.js
import './App.css';
import { useState, useEffect } from 'react';

import githubIcon from './assets/깃허브.png';
import instagramIcon from './assets/인스타그램.png';
import sunIcon from './assets/화이트.png';
import moonIcon from './assets/다크.png'; 
import searchIcon from './assets/검색.png';


function App() {
  const [isDark, setIsDark] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    document.body.className = isDark ? 'dark-mode' : '';
  }, [isDark]);

  return (
    <div className="app">
      <header className="header">
        <div className="left-nav">
          <h1 className="logo">Curatemag</h1>
          <nav className="nav">
            <a href="#fashion">Fashion</a>
            <a href="#music">Music</a>
            <a href="#lifestyle">LifeStyle</a>
          </nav>
        </div>

        <div className="icon-nav">
          <img src={githubIcon} alt="Github" className="icon"
          onClick={() => window.open("https://github.com/nibesmil")} />
          <img src={instagramIcon} alt="Instagram" className="icon" 
          onClick={()=> window.open("https://www.instagram.com/neebesmil/")}/>
          <img
          src={isDark ? moonIcon : sunIcon}
          alt="Theme Toggle"
          className={`icon theme-icon ${isDark ? 'dark' : 'light'}`}
          onClick={() => setIsDark(!isDark)}/>

           <img src={searchIcon} alt="Search" className="icon"
               onClick={() => setShowSearch(!showSearch)} />

        </div>

      </header>

      <div className={`search-bar ${showSearch ? 'show' : ''}`}>
        <input type="text" placeholder="🔍 검색어를 입력하세요." />
        <button className="close-btn" onClick={() => setShowSearch(false)}>✕</button>
      </div>

      <main className="main">
        <section className="hero">
          <h2>Curating Stories & Culture</h2>
          <p> 패션 | 음악 | 라이프스타일의 선두주자 (를 희망합니다.) </p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Curatemag. All Rights Reserved.</p>
        <p> by ansanthesoloist </p>
      </footer>
    </div>
  );
}

export default App;
