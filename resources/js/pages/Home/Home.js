import React from "react";
import Hero from "../../components/Hero";
import Products from "../../components/Products/Products";
import Services from "../../components/Services";
import ServicesTwo from "../../components/ServicesTwo";

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Products />
            <ServicesTwo />
        </div>
    );
};

export default Home;
