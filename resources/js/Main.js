import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Ubersicht from "./components/Ubersicht";
import styles from "./Main.module.scss";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./pages/SignUp";
import Test from "./pages/Test";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Faq from "./pages/Faq";
import ZahlungenVerwalten from "./components/ZahlungenVerwalten";
import BenachrichtigungenVerwalten from "./components/BenachrichtigungenVerwalten";
import BenutzerAnlegen from "./components/Benutzer/BenutzerAnlegen";
import Berechtigungen from "./components/Benutzer/Berechtigungen/Berechtigungen";
import AlleBenutzer from "./components/Benutzer/AlleBenutzer";
import FirmenStandorte from "./components/FirmenStandorte";
import FirmenVerwalten from "./components/FirmenVerwalten";
import FirmendatenAnzeigen from "./components/FirmendatenAnzeigen";
import FirmendatenBearbeiten from "./components/FirmendatenBearbeiten";
import FirmendatenMitarbeiter from "./components/FirmendatenMitarbeiter";
import MenusVerwalten from "./components/MenusVerwalten";
import FirmenzuschusseVerwalten from "./components/FirmenzuschusseVerwalten";
import FirmenzuschusseAnlegen from "./components/FirmenzuschusseAnlegen";
import BestellungenVerwalten from "./components/BestellungenVerwalten";
import RechnungenVerwalten from "./components/RechnungenVerwalten/RechnungenVerwalten";
import LieferscheineVerwalten from "./components/LieferscheineVerwalten";
import BestellbonsVerwalten from "./components/BestellbonsVerwalten";

function Main() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menus" element={<Menus />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="/product" element={<ProductDetails />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/ubersicht" element={<Ubersicht />} />
                <Route path="/allebenutzer" element={<AlleBenutzer />} />
                <Route path="/benutzeranlegen" element={<BenutzerAnlegen />} />
                <Route path="/berechtingungen" element={<Berechtigungen />} />
                <Route path="/firmenstandorte" element={<FirmenStandorte />} />
                <Route path="/firmenverwalten" element={<FirmenVerwalten />} />
                <Route
                    path="/firmendatenanzeigen"
                    element={<FirmendatenAnzeigen />}
                />
                <Route
                    path="/firmendatenbearbeiten"
                    element={<FirmendatenBearbeiten />}
                />
                <Route
                    path="/firmendatenmitarbeiter"
                    element={<FirmendatenMitarbeiter />}
                />
                <Route path="/menusverwalten" element={<MenusVerwalten />} />
                {/* Dont forget menus anlegen */}
                <Route
                    path="firmenzuschusse-verwalten"
                    element={<FirmenzuschusseVerwalten />}
                />
                <Route
                    path="firmenzuschusse-anlegen"
                    element={<FirmenzuschusseAnlegen />}
                />
                <Route
                    path="bestellungenverwalten"
                    element={<BestellungenVerwalten />}
                />
                <Route
                    path="rechnungenverwalten"
                    element={<RechnungenVerwalten />}
                />
                <Route
                    path="zahlungenverwalten"
                    element={<ZahlungenVerwalten />}
                />
                <Route
                    path="lieferscheineverwalten"
                    element={<LieferscheineVerwalten />}
                />
                <Route
                    path="bestellbonsverwalten"
                    element={<BestellbonsVerwalten />}
                />
                <Route
                    path="benachrichtigungenverwalten"
                    element={<BenachrichtigungenVerwalten />}
                />
            </Routes>
        </div>
    );
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(
        <BrowserRouter>
            <Main />
        </BrowserRouter>,
        document.getElementById("main")
    );
}
