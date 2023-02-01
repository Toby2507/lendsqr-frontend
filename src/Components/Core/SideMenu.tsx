import { Link } from 'react-router-dom';
import AppSearch from '../AppSearch';
import SideMenuItems from '../SideMenu/SideMenuItems';
import { AiOutlineBell } from 'react-icons/ai';

const SideMenu = () => {
  return (
    <section className="sidemenu-toggle">
      <div className="sidemenu-nav">
        <AppSearch parentClass='sidemenu' />
        <span className="sidemenu-nav__docs">
          <Link to="#">Docs</Link>
          <div className="sidemenu-nav__docs--notification">
            <AiOutlineBell />
          </div>
        </span>
      </div>
      <SideMenuItems />
    </section>
  );
};

export default SideMenu;