function SearchBar({ showSearch, setShowSearch }) {
  return (
    <div className={`search-bar ${showSearch ? "show" : ""}`}>
      <input type="text" placeholder="🔍 검색어를 입력하세요." />
      <button className="close-btn" onClick={() => setShowSearch(false)}>
        ✕
      </button>
    </div>
  );
}

export default SearchBar;
