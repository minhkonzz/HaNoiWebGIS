import "./index.css";
import SearchRecord from "./SearchRecord";

export default function SearchPositionSidebar() {

  return (
    <div className="posab bottom-0 theme-dark search-pos-sidebar search-pos-sidebar-left-val z-1">
      <div className="title-container posrel">
        <h3 className="posab color-white upper-text top-50pc left-6pc">Search position</h3>
        <button className="posab close-ic top-50pc right-6pc">
          <ion-icon name="close"/>
        </button>
      </div>
      <div className="search-container posrel">
        <input type="text" placeholder="Find position" className="search-text-inp posab pos-center thin-bd-r color-white"/>
        <span className="color-gray posab top-35pc right-12pc">
          <ion-icon name="search"/>
        </span>
      </div>
      <div className="search-records">
        <SearchRecord />
        <SearchRecord />
      </div>
    </div>
  )
}