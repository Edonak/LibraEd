// src/App.tsx

import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./component/Herosection/Herosection";
import BookCatalog from "./component/BookList/BookCatalogue/BookCatalogue";
import SubscriptionPage from "./component/Subscription/SubscriptionPage";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home";
// import AdminDashboard from "./pages/Dashboard/AdminDashboard";
// import LibraryPage from "./pages/Library";

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/library"
            element={
              <HeroSection
              title="Bienvenue à BiblioSphere"
              description="Le livre, au-delà du simple plaisir de lire, 
        est un compagnon précieux dans la lutte contre l’illettrisme 
        et un outil puissant pour le développement global de l’individu, 
        tant sur le plan intellectuel que personnel.Il favorise l'acquisition 
        de connaissances, stimule la pensée critique et enrichit 
        la compréhension du monde, contribuant ainsi à l'épanouissement de 
        l'esprit et à la construction d'une société éclairée."
              buttonText="Visiter le Bibliothèque"
              imageUrl="./../public/images/imageHerosection.png"
              />
            }
          />
          <Route path="/catalog" element={<BookCatalog />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>

        {/* <LibraryPage /> */}
        {/* <AdminDashboard /> */}
    </GoogleOAuthProvider>
  );
};

export default App;
