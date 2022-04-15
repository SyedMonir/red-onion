import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/logo.png';
import { FiShoppingBag } from 'react-icons/fi';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar bg-base-300">
        <div className="navbar-start">
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">
            <img src={logo} width={120} alt="" />
          </Link>
        </div>

        <div className="navbar-end">
          <button
            onClick={() => navigate('/cart')}
            className="btn btn-ghost btn-circle"
          >
            <div className="indicator">
              <FiShoppingBag size={'1.2rem'} />
              <span className="badge top-[-3px] py-2 badge-xs badge-primary indicator-item">
                1
              </span>
            </div>
          </button>

          <button
            onClick={() => navigate('/signup')}
            className="btn btn-ghost "
          >
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
