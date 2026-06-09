// pages/Fashion.js — Company Profile Root
import React from "react";
import { Helmet } from "react-helmet-async";
import HeaderTwo from "../components/headers/header-two";
import MasterFooter from "../components/footers/common/MasterFooter";
import Home from "./layouts/Shoes/index";


const Fashion = () => {
  return (
    <>
      <Helmet>
        <title>Seada — Premium Quality Products & Trusted Supplier</title>
        <meta name="description" content="Seada is a trusted manufacturer and supplier of premium quality products. Explore our product range and contact us for wholesale and commercial inquiries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/favicon.ico" />
      </Helmet>

      <HeaderTwo
        logoName={"logo/6.png"}
        direction="bottom"
        topClass="top-header"
      />
      <Home />
     

      <MasterFooter
        footerClass="footer-light"
        footerLayOut="light-layout upper-footer"
        footerSection="small-section border-section border-top-0"
        belowSection="section-b-space light-layout"
        newLatter={false}
        logoName="logo.png"
      />
    </>
  );
};

export default Fashion;
