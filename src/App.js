import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Main";
import SignUp from "./components/SignUp";
import ProduitRoutes from "./components/Produits/produits-routes";
import CommandeRoutes from "./components/Commandes/commandes-routes";
import CommunesRoutes from "./components/Communes/communes-routes";
import LigneCommandesRoutes from "./components/LigneCommande/ligneCommandes-routes";
import LivraisonRoutes from "./components/Livraison/livraison-routes";
import MoughataaRoutes from "./components/Moughataas/moughataas-routes";
import PaymentRoutes from "./components/Payments/payments-routes";
import PublicationRoutes from "./components/Publications/publication-routes";
import UsersRoutes from "./components/Users/users-routes";
import RolesRoutes from "./components/Roles/roles-routes";
import WilayasRoutes from "./components/Wilayas/wilayas-routes";
import React, { useState } from "react";
import Dashboards from "./components/Dashboard";
import { useSelector, useDispatch } from "react-redux";

import Login from "./components/Login";

function App() {
  const [clicked, setClicked] = useState(3);
  const { isAuthenticated } = useSelector((state) => state.authentifications);

  return (
    <div className="App  d-flex flex-row text-white">
      {isAuthenticated ? (
        <>
          <Main clicked={clicked} setClicked={setClicked} />
          <Routes>
            <Route path="/" element={<Dashboards />} />
            <Route path="/produits/*" element={<ProduitRoutes />} />
            <Route
              path="/ligne_commande/*"
              element={<LigneCommandesRoutes />}
            />
            <Route path="/livraison/*" element={<LivraisonRoutes />} />
            <Route path="/commandes/*" element={<CommandeRoutes />} />
            <Route path="/payments/*" element={<PaymentRoutes />} />
            <Route path="/wilayas/*" element={<WilayasRoutes />} />
            <Route path="/moughataas/*" element={<MoughataaRoutes />} />
            <Route path="/communes/*" element={<CommunesRoutes />} />
            <Route path="/publications/*" element={<PublicationRoutes />} />
            <Route path="/users/*" element={<UsersRoutes />} />
            <Route path="/roles/*" element={<RolesRoutes />} />
          </Routes>
        </>
      ) : (
        <>
          {" "}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
