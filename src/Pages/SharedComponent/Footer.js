import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">
            <img src={logo} width={120} alt="" />
          </Link>
          <p className="ml-4">Red Onion Food Website.</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/online-delivery" className="link link-hover">
            Online Delivery
          </Link>
          <Link to="/allday-open" className="link link-hover">
            24/7 Open
          </Link>
          <Link to="/marketing" className="link link-hover">
            Marketing
          </Link>
          <Link to="/advertisement" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/about-us" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/terms-of-use" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/privacy-policy" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/cookie-policy" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <footer className="footer items-center px-10 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">
            <h6>Syed Monir</h6>
          </Link>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link to="/facebook">
            <AiFillFacebook size={'2rem'} />
          </Link>
          <Link to="/instagram">
            <AiFillInstagram size={'2rem'} />
          </Link>
          <Link to="/youtube">
            <AiFillYoutube size={'2rem'} />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
