import React from "react";

import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import "../styles/pages/orphanagesMap.css";

import logo from "../img/Local.svg";

function orphanagesMap() {
  return (
    <div id="orphanagesMap">
      <aside>
        <header>
          <img src={logo} alt="happy-logo" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>
        <footer>
          <strong>Minas Gerais</strong>
          <span>Guanhães</span>
        </footer>
      </aside>

      <Map
        center={[-18.8228042, -42.9409691]}
        zoom={10.25}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to="" className="add-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default orphanagesMap;
