import { menuItems } from "../../data/menuitem";
import { grid_view, help, likeTag, menu } from "../common/commonImage";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={menu} alt="Menu" className="icon icon--large" />
      </div>
      <div className="sidebar__menu">
        {menuItems.map((item) => (
          <div key={item.id} className="sidebar__item">
            <img src={item.icon} alt={item.alt} className="icon" />
          </div>
        ))}
        <div className="line"></div>
        <div className="sidebar__item">
          <img src={grid_view} alt="" className="icon" />
        </div>
        <div className="sidebar__item">
          <img src={help} alt="" className="icon" />
        </div>
        <div className="sidebar__item">
          <img src={likeTag} alt="" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
