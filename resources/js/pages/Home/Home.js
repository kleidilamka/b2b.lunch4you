import React from "react";
import Footer from "../../components/Footer";
import FooterImages from "../../components/FooterImages";
import Hero from "../../components/Hero";
import Products from "../../components/Products/Products";
import Quality from "../../components/Quality";
import Services from "../../components/Services";
import ServicesTwo from "../../components/ServicesTwo";

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Products />
            <ServicesTwo />
            <FooterImages />
            <Quality />
            <Footer />
        </div>
    );
};

export default Home;
