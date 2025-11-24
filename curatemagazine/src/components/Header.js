import githubIcon from "../assets/깃허브.png";
import instagramIcon from "../assets/인스타그램.png";
import sunIcon from "../assets/화이트.png";
import moonIcon from "../assets/다크.png";
import searchIcon from "../assets/검색.png";

function Header({ setSelectedCategory, isDark, setIsDark, setShowSearch }) {
  return (
    <header className="header">
      <div className="left-nav">
        <h1
          className="logo"
          onClick={() => setSelectedCategory("all")}
        >
          Curatemag
        </h1>

        <nav className="nav">
          {["fashion", "music", "lifestyle"].map((cat) => (
            <a
              key={cat}
              href={`#${cat}`}
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory(cat);
              }}
            >
              <span className="eng">{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
              <span className="kor">
                {cat === "fashion" ? "패션" : cat === "music" ? "음악" : "라이프스타일"}
              </span>
            </a>
          ))}
        </nav>
      </div>

      <div className="icon-nav">
        <img
          src={githubIcon}
          alt="Github"
          className="icon"
          onClick={() => window.open("https://github.com/nibesmil")}
        />
        <img
          src={instagramIcon}
          alt="Instagram"
          className="icon"
          onClick={() => window.open("https://www.instagram.com/neebesmil/")}
        />
        <img
          src={isDark ? moonIcon : sunIcon}
          alt="Theme Toggle"
          className={`icon theme-icon ${isDark ? "dark" : "light"}`}
          onClick={() => setIsDark(!isDark)}
        />
        <img
          src={searchIcon}
          alt="Search"
          className="icon"
          onClick={() => setShowSearch((prev) => !prev)}
        />
      </div>
    </header>
  );
}

export default Header;
