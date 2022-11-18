export default function HeaderSidebarSection({ section }) {
   return (
      <li className="posrel header-sidebar-link" style={{ height: "80px" }}>
         <div className="posab pos-center d-flex at-center" style={{ width: "90%" }}>
            <span>
               <ion-icon name={section.icon} />
            </span>
            <p style={{ fontSize: "13px", display: "inline", marginLeft: "15px", lineHeight: 1.7, color: "rgb(185, 185, 185)" }}>{section.title}</p>
         </div>
      </li>
   )
}