// src/App.tsx

import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./component/Navbar/Navbar";
import HeroSection from "./component/Herosection/Herosection";

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="app">
        <Navbar />
      </div>
      <div className="">
        <HeroSection
          title="Bienvenue à notre plateforme"
          description="Le livre, au-delà du simple plaisir de lire, 
          est un compagnon précieux dans la lutte contre l’illettrisme 
          et un outil puissant pour le développement global de l’individu, 
          tant sur le plan intellectuel que personnel.Il favorise l'acquisition 
          de connaissances, stimule la pensée critique et enrichit 
          la compréhension du monde, contribuant ainsi à l'épanouissement de 
          l'esprit et à la construction d'une société éclairée."
          buttonText="Visiter le Bibliothèque"
          imageUrl="./../public/images/imageHerosection.png"
          onButtonClick={() => alert("Bouton cliqué !")}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
