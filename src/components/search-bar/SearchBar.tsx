import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="search">
      <div className="search__items">
        <img src="./img/loop_icon.svg" alt="loop" />
        <input type="search" placeholder="Search" />
      </div>
    </div>
  );
}

export default SearchBar;
