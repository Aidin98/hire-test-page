import L from "leaflet";

const icon = new L.Icon({
  iconUrl: require("./img/marker.svg"),
  iconRetinaUrl: require("./img/marker.svg"),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});


export { icon };
