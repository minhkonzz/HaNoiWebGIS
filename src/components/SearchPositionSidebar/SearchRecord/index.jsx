import "./index.css";

export default function SearchRecord() {
  return (
    <div className="search-record d-flex at-center">
      <span className="theme-light location-ic">
        <ion-icon name="location"/>
      </span>
      <div className="location-desc">
        <p>Trường Đại Học Kinh Tế Thành Phố Hồ Chí Minh</p>
        <p>196 Đường Trần Quang Khải, Phường Tân Định, Quận 1, Thành Phố Hồ Chí Minh</p>
      </div>
    </div>
  )
}