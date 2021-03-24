import React, { useState } from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import 'leaflet/'
import * as L from "leaflet";
function Map() {
    const LeafIcon = L.Icon.extend({
    options: {}
  });

  const blueIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
    })
  const [icon, setIcon] = useState(blueIcon)
  const position = [44.01667 , 20.91667];
  return (
    <div className="map">
      <div className="map__title">
        <p className="map__sub">Home / Lorem IPSUM</p>
        <h1 className='map__h1'>Suspendisse</h1>
      </div>
      <div className="map__location">
        <MapContainer
          center={position}
          zoom={9}
          scrollWheelZoom={false}
         
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={icon}>
            <Popup className="map__poppic"></Popup>
          </Marker>
        </MapContainer>
        ,
      </div>
    </div>
  );
}

export default Map;
