import { useState, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView"; 
import { ARCGIS_API_KEY } from "./configs";
import defaultConfig from "@arcgis/core/config"; 
import HeaderSidebar from "./components/HeaderSidebar";

function App() {

  defaultConfig.apiKey = ARCGIS_API_KEY; 

  useEffect(() => {
    const mapView = new MapView({
      map: new Map({
        basemap: "arcgis-topographic"
      }), 
      center: [-118.805, 34.027], 
      zoom: 13, 
      container: "root-view"
    });
    return () => { mapView = null; };
  }, []); 

  return (
    <div className="posrel">
      <header className="posab w-full theme-dark">
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
      <HeaderSidebar />
    </div>
  );
}

export default App;
