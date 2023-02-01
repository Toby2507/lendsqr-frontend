import { useEffect } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { VscTriangleDown } from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/logo.svg';
import { getFromLocal } from '../../Utils/localStorage';
import { useGlobal } from '../../context';
import AppSearch from '../AppSearch';

const Header = () => {
  const navigate = useNavigate();
  const { showSideMenu, setShowSideMenu } = useGlobal();
  const currentUser = getFromLocal("currentUser");

  useEffect(() => {
    if (!currentUser) {
      navigate('/', { replace: true });
    }
  }, [currentUser, navigate]);
  return (
    <header className="app__header">
      <div className="menu-btn" onClick={() => setShowSideMenu(!showSideMenu)}>
        <span className={`menu-btn__burger ${showSideMenu ? "open" : ""}`}></span>
      </div>
      <figure className="header-logo">
        <img src={logo} alt="lendsqr" />
      </figure>
      <div className="site-nav">
        <AppSearch parentClass='site' />
        <span className="site-nav__docs">
          <Link to="#">Docs</Link>
        </span>
      </div>
      <div className="user-info">
        <div className="user-info__notification">
          <AiOutlineBell />
        </div>
        <div className="user-info__wrapper">
          <figure className="user-info__image">
            <img src={currentUser?.profile.avatar} alt={currentUser?.userName} />
          </figure>
          <div className="user-info__details">
            <h2 className="user-info__details--name">{currentUser?.userName}</h2>
            <VscTriangleDown className="user-info__details--icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;