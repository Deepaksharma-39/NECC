import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import ServiceDetailsInner5 from "../components/ServiceDetailsInner5";
import SupportBarOne from "../components/SupportBarOne";
import NavbarThree from "../components/NavbarThree";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));

const ServiceDetail5 = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
         {/* SupportBarOne */}
         <SupportBarOne/>

            {/* Navbar Three*/}
            <NavbarThree/>

          {/* Breadcrumb */}
          <Breadcrumb title={"SERVICES DETAILS"} />

          {/* Service Details Inner */}
          <ServiceDetailsInner5 />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>{" "}
      </Fragment>
    </>
  );
};

export default ServiceDetail5;