import React from "react";

import { FiArrowRight } from "react-icons/fi";

import { Link } from "react-router-dom"; // Navegação interna

import "../styles/pages/landing.css";

import logo from "../img/Logo.svg";
import local from "../img/Local.svg";
import illu from "../img/Ilustra02.svg";

function landing() {
  return (
    <div id="landing">
      <div className="content-wrapper">
        <img src={logo} alt="happy-logo" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Minas Gerais</strong>
          <span>Guanhães</span>
        </div>
        <Link to="/app" className="login">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default landing;
