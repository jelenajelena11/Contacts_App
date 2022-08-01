import { ChangeEventHandler } from "react";
import "./SearchBar.scss";
import LoopIcon from "../../assets/loop_icon.svg";

interface Props {
  handleSearchChange: ChangeEventHandler<HTMLInputElement>;
}

function SearchBar({ handleSearchChange }: Props) {
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
