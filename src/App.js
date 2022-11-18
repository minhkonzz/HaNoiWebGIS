import { useState, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView"; 
import { ARCGIS_API_KEY } from "./configs";
import defaultConfig from "@arcgis/core/config"; 

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
    <div id="root-view" className="w-full h-full">
      
    </div>
  );
}

export default App;
