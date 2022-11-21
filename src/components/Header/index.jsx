import "./index.css";

export default function Header() {
  return (
    <header className="posab w-full theme-dark z-10">
      <div className="header-left d-flex at-center posab left-1pc top-50pc">
        <button>
          <svg viewBox="15 4 10 20" width="45" height="40">
            <rect fill="white" y="10" width="20" height="1"></rect>
            <rect fill="white" y="14" width="20" height="1"></rect>
            <rect fill="white" y="18" width="20" height="1"></rect>
          </svg>
        </button>
        <img src="https://bando.tphcm.gov.vn/assets/logo-bandoso-hcm-dark.7c0a1651.svg" alt="logo_web"/>
      </div>
    </header>
  )
}