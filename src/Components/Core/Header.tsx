import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import { VscTriangleDown } from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/logo.svg';
import { getFromLocal } from '../../Utils/localStorage';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface searchInterface {
  search: string;
}
const Header = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<searchInterface>();
  const currentUser = getFromLocal("currentUser");

  const onSearch: SubmitHandler<searchInterface> = data => {
    console.log(data);
  };

  useEffect(() => {
    if (!currentUser) {
      navigate('/', { replace: true });
    }
  }, [currentUser, navigate]);
  return (
    <header className="app__header">
      <div className="menu-btn">
        <span className="menu-btn__burger"></span>
      </div>
      <figure className="header-logo">
        <img src={logo} alt="lendsqr" />
      </figure>
      <div className="site-nav">
        <form className="site-nav__search" onSubmit={handleSubmit(onSearch)}>
          <input type="search" id="search" {...register('search')} placeholder='Search for anything' />
          <button type="submit"><AiOutlineSearch /></button>
        </form>
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