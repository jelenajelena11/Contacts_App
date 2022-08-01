import "./SearchBar.scss";
import LoopIcon from "../../assets/loop_icon.svg";

function SearchBar({ handleSearchChange }: any) {
  return (
    <div className="search">
      <div className="search__items">
        <img src={LoopIcon} alt="loop" />
        <input
          type="search"
          placeholder="Search"
          id="search"
          name="search"
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default SearchBar;
