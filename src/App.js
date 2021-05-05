import React from 'react';
import Footer from './Components/Footer/Footer';
import AppNavBar from "./Components/AppNavBar/AppNavBar";
import Routes from './Routes';
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <AppNavBar />
      <Routes />
      <Footer />
    </div>
  );
}