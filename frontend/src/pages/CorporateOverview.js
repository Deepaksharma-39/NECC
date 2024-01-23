import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import SearchPopup from "../elements/SearchPopup";
// import ServiceDetailsInner from "../components/ServiceDetailsInner";
// import PartnerOne from "../components/PartnerOne";
import FooterBottomOne from "../components/FooterBottomOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import ChairmanDeskInner from "../components/ChairmanDeskInner";
import CorporateOverviewInner from "../components/CorporateOverviewInner";
import PartnerOne from "../components/PartnerOne";
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));

const CorporateOverview = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* Search Popup */}
            <SearchPopup />
  
            {/* Navbar One */}
            <NavbarOne />
  
            {/* Breadcrumb */}
            <Breadcrumb title={"CORPORATE OVERVIEW"} />

            {/* Service Details Inner */}
            <CorporateOverviewInner/>
  
            {/* Partner One */}
            <PartnerOne />
  
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
  