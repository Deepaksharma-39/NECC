import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt, FaUserAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SetSearchPopUp } from "../redux/stateSlice/clickActionSlice";
import store from "../redux/store/store";

const NavbarOne = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 300) {
        setActive(false);
      } else if (window.pageYOffset > 300) {
        setActive(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const searchPopUp = useSelector((state) => state.clickAction.searchPopUp);
  const actionSearch = () => {
    store.dispatch(SetSearchPopUp(!searchPopUp));
  };

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };


  return (
    <>
      {/* navbar start */}
      <header className='navbar-area'>
        <div className='navbar-top'>
          <Link className='main-logo' to='/'>
            <div className='logo d-none d-xl-block'>
              <img src='/assets/img/Necclogo.webp' alt='Transpro' />
            </div>
          </Link>
          <div className='nav-phone-wrap'>
            <FaPhoneAlt />
            +91-9711797516
          </div>
          <div className='container p-lg-0'>
            <div className='row'>
              <div className='col-lg-12 col-md-11 text-md-start text-center'>
                <ul className='topbar-right social-area text-md-end text-center'>
                  <li>
                  {/* <h4>North Eastern Carrying Corporation Ltd.</h4> */}
                  <img src='/assets/img/banner/necc-logo.png' className="img1" alt='Transpro' />
                  </li>
                </ul>
              </div>
              {/* <div className='col-lg-2 col-md-3'>
                <ul className='topbar-right social-area text-md-end text-center'>
                  <li>
                    <Link to='#'>
                      <FaFacebookF aria-hidden='true' />
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <FaTwitter aria-hidden='true' />
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <FaLinkedinIn aria-hidden='true' />
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <FaInstagram aria-hidden='true' />
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <nav
          className={
            active
              ? "navbar navbar-area-1 navbar-area navbar-expand-lg sticky-active"
              : "navbar navbar-area-1 navbar-area navbar-expand-lg"
          }
        >
          <div className='container nav-container'>
            <div className='responsive-mobile-menu'>
              <button
                onClick={() => setOpen(!open)}
                className={
                  open
                    ? "menu toggle-btn d-block d-lg-none open"
                    : "menu toggle-btn d-block d-lg-none "
                }
                data-target='#transpro_main_menu'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='icon-left' />
                <span className='icon-right' />
              </button>
            </div>
            <div className='logo'>
              <Link to='/'>
                <img src='/assets/img/home-2/necclogo.png' className="img-fluid " alt='Transpro' />
              </Link>
            </div>
            <div className='nav-left-part'></div>
            <div className='nav-right-part nav-right-part-mobile'>
              <span
                className='search-bar-btn cursor-pointer ps-5'
                onClick={actionSearch}
              >
                <svg
                  width={16}
                  height={16}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.9062 14.6562C15.9688 14.7188 16 14.8125 16 14.9062C16 15.0312 15.9688 15.125 15.9062 15.1875L15.1875 15.875C15.0938 15.9688 15 16 14.9062 16C14.7812 16 14.7188 15.9688 14.6562 15.875L10.8438 12.0938C10.7812 12.0312 10.75 11.9375 10.75 11.8438V11.4062C10.1562 11.9062 9.5 12.3125 8.78125 12.5938C8.03125 12.875 7.28125 13 6.5 13C5.3125 13 4.21875 12.7188 3.21875 12.125C2.21875 11.5625 1.4375 10.7812 0.875 9.78125C0.28125 8.78125 0 7.6875 0 6.5C0 5.3125 0.28125 4.25 0.875 3.25C1.4375 2.25 2.21875 1.46875 3.21875 0.875C4.21875 0.3125 5.3125 0 6.5 0C7.6875 0 8.75 0.3125 9.75 0.875C10.75 1.46875 11.5312 2.25 12.125 3.25C12.6875 4.25 13 5.3125 13 6.5C13 7.3125 12.8438 8.0625 12.5625 8.78125C12.2812 9.53125 11.9062 10.1875 11.4062 10.75H11.8438C11.9375 10.75 12.0312 10.7812 12.0938 10.8438L15.9062 14.6562ZM6.5 11.5C7.375 11.5 8.21875 11.2812 9 10.8438C9.75 10.4062 10.375 9.78125 10.8125 9C11.25 8.25 11.5 7.40625 11.5 6.5C11.5 5.625 11.25 4.78125 10.8125 4C10.375 3.25 9.75 2.625 9 2.1875C8.21875 1.75 7.375 1.5 6.5 1.5C5.59375 1.5 4.75 1.75 4 2.1875C3.21875 2.625 2.59375 3.25 2.15625 4C1.71875 4.78125 1.5 5.625 1.5 6.5C1.5 7.40625 1.71875 8.25 2.15625 9C2.59375 9.78125 3.21875 10.4062 4 10.8438C4.75 11.2812 5.59375 11.5 6.5 11.5Z'
                    fill='#080C24'
                  />
                </svg>
              </span>
              <Link className='btn btn-base' to='/contact'>
                <span></span> Get A Quote
              </Link>
            </div>
            <div
              className={
                open
                  ? "collapse navbar-collapse sopen"
                  : "collapse navbar-collapse"
              }
              id='transpro_main_menu'
            >
              <ul className='navbar-nav menu-open' style={{textAlign:"right"}}>
              {/* <li className='menu-item-has-children current-menu-item'>
                  <Link to='/'>Home</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li className='menu-item-has-children current-menu-item'>
                  <Link to='#'>About Us</Link>
                  <ul className='sub-menu'>
                  <li>
                      <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                      <Link to='/ChairmanDesk'>Chairman Desk</Link>
                    </li>
                    <li>
                      <Link to='/CorporateOverview'>Corporate Overview</Link>
                    </li>
                    <li>
                      <Link to='/History'>History</Link>
                    </li>
                    <li>
                      <Link to='/VisionAndQualityPolicy'>Vision & Quality Policy</Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <Link to='#'>Investors</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/Investors'>Disclosures under Regulation 46 of SEBI (LODR)<br/>Regulations,2015</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/Network'>Network</Link>
                </li>
                <li className='menu-item-has-children'>
                  <Link to='#'>Services</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/service'>All Service</Link>
                    </li>
                    <li>
                      <Link to='/ServiceDetail1'>Part Truck Load</Link>
                    </li>
                    <li>
                      <Link to='/ServiceDetail2'>Full Truck Load</Link>
                    </li>
                    <li>
                      <Link to='/ServiceDetail3'>Bulk Movements</Link>
                    </li>
                    <li>
                      <Link to='/ServiceDetail4'>ODC Movements</Link>
                    </li>
                    <li>
                      <Link to='/ServiceDetail5'>Warehousing & 3PL</Link>
                    </li>
                    <li>
<<<<<<< HEAD
                      <Link to='/SARCcountry'>SARC Country</Link>
=======
                      <Link to='#'>SARC Country</Link>
>>>>>>> d8ba094c436f9597cae9b00194c4957525a0b9b2
                    </li>
                    <li>
                      <Link to='/Pickup&Delivery'>Pickup & Delivery</Link>
                    </li>
                  </ul>
                </li>
                 {/* <li className='menu-item-has-children'>
                  <Link to='#'>SiteMap</Link>
                  <ul className='sub-menu'>
                    <li>
                    <Link to='/SiteMap'>SiteMap</Link>
                    </li>
                  </ul>
                </li> */}
                {/* <li>
                  <Link to='/SiteMap'>SiteMap</Link>
                </li> */}
                <li className='menu-item-has-children current-menu-item'>
                  <Link to='#'>Contact Us</Link>
                  <ul className='sub-menu'>
                  <li>
                        <Link to='/contact'>Contact Us</Link>
                      </li>
                      <li>
                        <Link to='/Career'>Careers</Link>
                      </li>
<<<<<<< HEAD
                      {/* <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
=======
                      {/* <li>
>>>>>>> d8ba094c436f9597cae9b00194c4957525a0b9b2
                        <Link to='#'>Customer Care</Link>
                        {isDropdownOpen && (
                        <ul className="dropdown-content">
                          <li>
                          <Link to='/DOWNLOAD/41' style={{marginLeft:"-13px"}}>Download</Link>
                            </li>
                        </ul>
                         )}
                      </li> */}
                      <li>
                      <Link to='/faq'>FAQ</Link>
                      </li>
                      <li>
                        <Link to='/Feedback'>Feedback</Link>
                      </li>
                      </ul>
                </li>
                <li>
                  <Link to='/CorporateSocialResponsibility'>CSR</Link>
                </li>
                <li>
                  <Link to='/RIGHT-ISSUES/36'>Right Issues</Link>
                </li>
                <li>
                  <Link to='/admin'><FaUserAlt style={{marginRight:"4px",marginBottom:"2px"}}/>Login</Link>
                </li>
              </ul>
            </div>
            {/* <div className='nav-right-part nav-right-part-desktop'>
              <span
                className='search-bar-btn cursor-pointer ps-5'
                onClick={actionSearch}
              >
                <svg
                  width={16}
                  height={16}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.9062 14.6562C15.9688 14.7188 16 14.8125 16 14.9062C16 15.0312 15.9688 15.125 15.9062 15.1875L15.1875 15.875C15.0938 15.9688 15 16 14.9062 16C14.7812 16 14.7188 15.9688 14.6562 15.875L10.8438 12.0938C10.7812 12.0312 10.75 11.9375 10.75 11.8438V11.4062C10.1562 11.9062 9.5 12.3125 8.78125 12.5938C8.03125 12.875 7.28125 13 6.5 13C5.3125 13 4.21875 12.7188 3.21875 12.125C2.21875 11.5625 1.4375 10.7812 0.875 9.78125C0.28125 8.78125 0 7.6875 0 6.5C0 5.3125 0.28125 4.25 0.875 3.25C1.4375 2.25 2.21875 1.46875 3.21875 0.875C4.21875 0.3125 5.3125 0 6.5 0C7.6875 0 8.75 0.3125 9.75 0.875C10.75 1.46875 11.5312 2.25 12.125 3.25C12.6875 4.25 13 5.3125 13 6.5C13 7.3125 12.8438 8.0625 12.5625 8.78125C12.2812 9.53125 11.9062 10.1875 11.4062 10.75H11.8438C11.9375 10.75 12.0312 10.7812 12.0938 10.8438L15.9062 14.6562ZM6.5 11.5C7.375 11.5 8.21875 11.2812 9 10.8438C9.75 10.4062 10.375 9.78125 10.8125 9C11.25 8.25 11.5 7.40625 11.5 6.5C11.5 5.625 11.25 4.78125 10.8125 4C10.375 3.25 9.75 2.625 9 2.1875C8.21875 1.75 7.375 1.5 6.5 1.5C5.59375 1.5 4.75 1.75 4 2.1875C3.21875 2.625 2.59375 3.25 2.15625 4C1.71875 4.78125 1.5 5.625 1.5 6.5C1.5 7.40625 1.71875 8.25 2.15625 9C2.59375 9.78125 3.21875 10.4062 4 10.8438C4.75 11.2812 5.59375 11.5 6.5 11.5Z'
                    fill='#080C24'
                  />
                </svg>
              </span>
              <Link className='btn btn-base' to='/contact'>
                <span></span> Get A Quote
              </Link>
            </div> */}
          </div>
        </nav>
      </header>
      {/* navbar end */}
    </>
  );
};

export default NavbarOne;
