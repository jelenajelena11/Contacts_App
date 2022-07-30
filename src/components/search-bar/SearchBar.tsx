import "./SearchBar.scss";
import LoopIcon from "../../assets/loop_icon.svg";

function SearchBar() {
  return (
    <div className="search">
      <div className="search__items">
        <img src={LoopIcon} alt="loop" />
        <input type="search" placeholder="Search" />
      </div>
    </div>
  );
}

export default SearchBar;
