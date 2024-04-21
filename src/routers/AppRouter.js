import React from "react";
import Navbar from "../conponents/ui/NavBar";
import Generos from "../conponents/generos/Generos";
import Footer from "../conponents/ui/Footer";
import NotFound from "../conponents/ui/NotFound"
import Directores from "../conponents/directores/Directores"
import Medias from "../conponents/medias/Medias"
import Productoras from "../conponents/productoras/Productoras"
import Tipos from "../conponents/tipos/Tipos"
import { Route, Routes } from "react-router-dom";

export default function AppRouter() {
    return (
        <>
            <div className="container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Generos />} />
                    <Route path="/directores" element={<Directores />} />
                    <Route path="/Series-Peliculas" element={<Medias />} />
                    <Route path="/productoras" element={<Productoras />} />
                    <Route path="/tipos" element={<Tipos />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </>
    )

}