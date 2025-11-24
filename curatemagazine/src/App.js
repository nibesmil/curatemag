import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PostList from "./components/PostList";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    document.body.className = isDark ? "dark-mode" : "";
  }, [isDark]);

  useEffect( () => {
    if (selectedCategory === "all") {
      setPosts([]);
      return;
    }

    const fileMap = {
      fashion: "/posts/f_posts.json",
      music: "/posts/m_posts.json",
      lifestyle: "/posts/ls_posts.json"
    };

    fetch(fileMap[selectedCategory])
    .then((res)=>res.json())
    .then((data)=>setPosts(data))
    .then((err)=>console.error("JSON 파일을 불러올 수 없습니다.",err));
  }, [selectedCategory]);

  return (
    <div className="app">
      <Header
      setSelectedCategory={setSelectedCategory}
      isDark={isDark}
      setIsDark={setIsDark}
      setShowSearch={setShowSearch}
    />
      <SearchBar showSearch={showSearch} setShowSearch={setShowSearch} />

      <main className="main">
        {selectedCategory === "all" ? (<Hero />) : (<PostList posts={posts}/>)}
        </main> 

        <Footer />
    </div>
  );
} 

export default App;
