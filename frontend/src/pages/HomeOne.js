import React, { Fragment, Suspense, useState } from "react";
import Preloader from "../elements/Preloader";
// import NavbarThree from "../components/NavbarThree";
// import SupportBarOne from "../components/SupportBarOne";
import BannerFour from "../components/BannerFour";
import NavbarOne from "../components/NavbarOne";
import CounterThree from "../components/CounterThree";
import AboutThree from "../components/AboutThree";
// import TransportServiceAreaTwo from "../components/TransportServiceAreaTwo";
// import GetDetailsInner from "../components/GetDetailsInner";
// const BannerOne = React.lazy(() => import("../components/BannerOne"));
const AboutOne = React.lazy(() => import("../components/AboutOne"));
// const BlogOne = React.lazy(() => import("../components/BlogOne"));
// const ContactOne = React.lazy(() => import("../components/ContactOne"));
const CounterOne = React.lazy(() => import("../components/CounterOne"));
const FeatureOne = React.lazy(() => import("../components/FeatureOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
// const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
// const PortfolioOne = React.lazy(() => import("../components/PortfolioOne"));
// const ServiceOne = React.lazy(() => import("../components/ServiceOne"));
// const TeamOne = React.lazy(() => import("../components/TeamOne"));
// const TestimonialOne = React.lazy(() => import("../components/TestimonialOne"));
// const WhyChooseUsOne = React.lazy(() => import("../components/WhyChooseUsOne"));
// const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const HomeOne = () => {

  return (
    <>
      <Fragment> 
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          {/* <SearchPopup /> */}
          {/* SupportBarOne */}
          {/* <SupportBarOne/> */}

          {/* Navbar One */}
          {/* <NavbarThree/> */}

          <NavbarOne/>

          {/* Banner One */}
          {/* <BannerOne /> */}

          <BannerFour />

          {/* Feature One */}
          <FeatureOne />

          {/* <TransportServiceAreaTwo /> */}

          {/* About One */}
          {/* <AboutOne /> */}

          <AboutThree/>

          {/* Service One */}
          {/* <ServiceOne /> */}

          {/* Why Choose Us One */}
          {/* <WhyChooseUsOne /> */}

          {/* Counter One */}

          {/* <CounterOne /> */}
          <CounterThree/>

          {/* Team One */}
          {/* <TeamOne /> */}

          {/* Contact One */}
          {/* <div
            className='call-to-contact-area pd-top-240'
            style={{ background: "#F9F9F9" }}
          >
            <ContactOne />
          </div> */}


          {/* Portfolio One */}
          {/* <PortfolioOne /> */}

          {/* Blog One */}
          {/* <BlogOne /> */}

          {/* Partner One */}
          <PartnerOne />

          {/* <GetDetailsInner/> */}

          {/* Testimonial One */}
          {/* <TestimonialOne /> */}


          {/* Footer One */}
          <FooterOne />
          

          {/* Footer Bottom One */}
          <FooterBottomOne />
         
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeOne;
