import React from "react";
import NavbarWeb from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <NavbarWeb className="home-nav" />
      <div className="content">
        <h1>Mo.</h1>
        <h3>Motive. Motivation. Movement.</h3>
        <a href="motivation">
          <button className="btn">Get Started</button>
        </a>
      </div>
    </div>
  );
}
