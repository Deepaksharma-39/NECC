import React, { Fragment, Suspense,useState,useEffect } from "react";
import Preloader from "../elements/Preloader";
import FooterBottomOne from "../components/FooterBottomOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import CorporateOverviewInner from "../components/CorporateOverviewInner";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
import { Link } from "react-router-dom";

const CorporateOverview = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* SupportBarOne */}
          <SupportBarOne/>
           {/* Navbar Three */}
           <NavbarThree/>
  
            {/* Breadcrumb */}
            {screenSize.width > 767 && (
            <Breadcrumb title={"CORPORATE OVERVIEW"} imgSrc={"/assets/img/banner/corporate-overview2 (1).webp"} className="img-fluid"/>)}

            {screenSize.width <= 767 && (
                        <div id="bg3">
                          <div className='breadcrumb-area bg-overlay-2'>
                          <div className='container'>
                            <div className='row'>
                              <div className='col-xl-12 col-lg-12 col-md-12'>
                                <div className='breadcrumb-inner'>
                                  <div className='section-title mb-0'>
                                    <h2 className='page-title'>CORPORATE OVERVIEW</h2>
                                    <ul className='page-list'>
                                      <li>
                                        <Link to='/'>HOME</Link>
                                      </li>{" "}
                                      /<li className='ps-0'>CORPORATE OVERVIEW</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        )}

            {/* Service Details Inner */}
            <CorporateOverviewInner/>
  
            {/* Partner One */}
            {/* <PartnerOne /> */}
  
            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>
        </Fragment>
      </>
    );
  };
  
  export default CorporateOverview;
  