import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { menuItemInterface } from '../../Utils/interfaces';
import { useGlobal } from '../../context';

interface menuInterface extends menuItemInterface {
  isActive: boolean;
  isSelect?: boolean;
  activate: (val: string) => void;
}

const SingleMenuItem = ({ menuTitle, menuIcon, menuUrl, isActive, activate, isSelect = false }: menuInterface) => {
  const { setShowSideMenu } = useGlobal();
  const handleClick = () => {
    activate(menuTitle);
    setTimeout(() => setShowSideMenu(false), 100);
  };
  return (
    <Link to={menuUrl}>
      <article className={`sidemenu-items__item ${isActive ? "active" : ""}`} onClick={handleClick}>
        <figure className="sidemenu-items__item--img">
          <img src={menuIcon} alt={menuTitle} />
        </figure>
        <h3 className="sidemenu-items__item--title">{menuTitle}</h3>
        {isSelect && <FaAngleDown />}
      </article>
    </Link >
  );
};

export default SingleMenuItem;