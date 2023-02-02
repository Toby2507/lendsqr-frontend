import { HiArrowLongLeft } from 'react-icons/hi2';
import { useNavigate, useParams } from 'react-router-dom';
import AccountInfo from '../Components/UserPage/AccountInfo';
import { getFromLocal } from '../Utils/localStorage';
import { userInterface } from '../Utils/interfaces';
import PersonalInfo from '../Components/UserPage/PersonalInfo';

const UserPage = () => {
  const { userId } = useParams();
  const users = getFromLocal("LendsqrUsers");
  const user: userInterface = users.find((user: userInterface) => user.id === userId);
  const navigate = useNavigate();
  return (
    <section className="userpage">
      <button className='userpage-goback' onClick={() => navigate(-1)}><HiArrowLongLeft /> back to users</button>
      <section className="userpage-header">
        <h1 className="userpage-header__title">user details</h1>
        <div className="userpage-header__btns">
          <button className="userpage-header__btns--blacklist">blacklist user</button>
          <button className="userpage-header__btns--activate">activate user</button>
        </div>
      </section>
      <AccountInfo user={user} />
      <PersonalInfo user={user} />
    </section>
  );
};

export default UserPage;