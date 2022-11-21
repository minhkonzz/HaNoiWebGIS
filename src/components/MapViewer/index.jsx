import "./index.css";
import { useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView"; 
import { ARCGIS_API_KEY } from "../../../src/configs";
import defaultConfig from "@arcgis/core/config"; 
import NavSidebar from "../NavSidebar";
import SearchPositionSidebar from "../SearchPositionSidebar";

export default function MapViewer() {

  defaultConfig.apiKey = ARCGIS_API_KEY; 

  useEffect(() => {
    const mapView = new MapView({
      map: new Map({
        basemap: "arcgis-topographic"
      }), 
      center: [-118.805, 34.027], 
      zoom: 13, 
      container: "map-view"
    });
    return () => { 
      if(!!mapView) mapView = null; 
    };
  }, []); 

  return (
    <main>
      <NavSidebar />
      <SearchPositionSidebar />
      <div id="map-view" className="posab left-0 bottom-0 right-0"></div>
    </main>
  )
}