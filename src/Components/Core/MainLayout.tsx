import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideMenu from './SideMenu';
import { useGlobal } from '../../context';

const MainLayout = () => {
  const { showSideMenu } = useGlobal();
  return (
    <div>
      <Header />
      <div className="main-grid">
        <aside className={`sidemenu ${showSideMenu ? "open" : ""}`}>
          <SideMenu />
        </aside>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      <div className={`modal ${showSideMenu ? "open" : ""}`}></div>
    </div>
  );
};

export default MainLayout;