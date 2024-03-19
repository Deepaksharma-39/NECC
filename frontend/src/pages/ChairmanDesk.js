import React, { Fragment, Suspense,useState,useEffect  } from "react";
import Preloader from "../elements/Preloader";
import FooterBottomOne from "../components/FooterBottomOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import ChairmanDeskInner from "../components/ChairmanDeskInner";
// import PartnerOne from "../components/PartnerOne";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
import { Link } from "react-router-dom";

const ChairmanDesk = () => {
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
            <Breadcrumb title={"CHAIRMAN DESK"} imgSrc={"/assets/img/banner/chairmen.webp"}/>)}

            {screenSize.width <= 767 && (
                        <div id="bg2">
                          {/* <div className='breadcrumb-area bg-overlay-2'>
                          <div className='container'>
                            <div className='row'>
                              <div className='col-xl-12 col-lg-12 col-md-12'>
                                <div className='breadcrumb-inner'>
                                  <div className='section-title mb-0'>
                                    <h2 className='page-title'>CHAIRMAN DESK</h2>
                                    <ul className='page-list'>
                                      <li>
                                        <Link to='/'>HOME</Link>
                                      </li>{" "}
                                      /<li className='ps-0'>CHAIRMAN DESK</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        </div>
                        )}

            {/* Service Details Inner */}
            <ChairmanDeskInner/>

            {/* Partner One */}
            {/* <PartnerOne/> */}
        
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>
        </Fragment>
      </>
    );
  };
  
  export default ChairmanDesk;
  