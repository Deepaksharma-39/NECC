import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
// import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import SupportBarOne from "../components/SupportBarOne";
import NavbarThree from "../components/NavbarThree";
import CorporateGovernanceInner from "../components/CorporateGovernanceInner";


const CorporateGovernance = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
             {/* SupportBarOne */}
          <SupportBarOne/>

            {/* Navbar Three*/}
            <NavbarThree/>
  
            {/* Breadcrumb */}
            {/* <Breadcrumb title={"CORPORATE GOVERNANCE"} imgSrc={"/assets/img/banner/1.png"}/> */}

            {/*Investors Inner */}
            <CorporateGovernanceInner/>
  
            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>{" "}
        </Fragment>
      </>
    );
  };
  
  export default CorporateGovernance;