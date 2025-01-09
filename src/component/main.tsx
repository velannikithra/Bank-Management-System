import React from "react";
import Navbar from "./navbar";
import Banner from "./banner";
import More from "./more";
import Footer from "./footer";

const Main: React.FC = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <More />
            <Footer />
        </>
    );
};

export default Main;
