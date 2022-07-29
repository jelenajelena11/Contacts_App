import "../sidebar/Sidebar.scss";

function SidebarItem({ sideImage, title, itemNumber, clicked, onClick }: any) {
  return (
    <div>
      {clicked ? (
        <button
          className="sidebar__item active"
          type="button"
          onClick={onClick}
        >
          <div className="sidebar__item_left">
            <img src={sideImage} alt="contacts" />
            <span>{title}</span>
          </div>
          <span className="sidebar__item_number">{itemNumber}</span>
        </button>
      ) : (
        <button className="sidebar__item" type="button" onClick={onClick}>
          <div className="sidebar__item_left">
            <img src={sideImage} alt="contacts" />
            <span>{title}</span>
          </div>
          <span className="sidebar__item_number">{itemNumber}</span>
        </button>
      )}
    </div>
  );
}

export default SidebarItem;
