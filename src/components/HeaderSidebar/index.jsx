import HeaderSidebarSection from "./HeaderSidebarSection";

const HeaderSidebarSections = [
   {
      title: "Cổng 1022 tiếp nhận thông tin và giải đáp", 
      icon: "link"
   }, 
   {
      title: "Chế độ nền tối",
      icon: "moon-outline"
   }, 
   {
      title: "Chuyển đổi ngôn ngữ", 
      icon: "language"
   }
]

export default function HeaderSidebar() {
   return (
      <div className="posab w-full h-full z-1" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
         <aside className="posab left-0 h-full theme-dark" style={{ width: "330px", backgroundColor: "rgb(var(--v-dark))"}}>
            <div className="posrel" style={{ height: "52px" }}>
               <span className="close-ic posab top-50pc" style={{ right: "3%" }}>
                  <ion-icon name="close"/>
               </span>
            </div>
            <div>
               <ul style={{ listStyle: "none" }}> {
                  HeaderSidebarSections.map((section, index) => (
                     <HeaderSidebarSection key={index} section={section}/>
                  ))
               }
               </ul>
            </div>
         </aside>
      </div>
   )
}