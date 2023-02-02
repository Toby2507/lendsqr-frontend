import React from 'react';
import { userInterface } from '../../Utils/interfaces';

const PersonalInfo = ({ user }: { user: userInterface; }) => {
  return (
    <section className="userpage-personal">
      <article className="userpage-personal__article">
        <h2 className="userpage-personal__article--title">personal information</h2>
        <div className="userpage-personal__article--info">
          <div className="userpage-personal__article--info-single">
            <h4>full name</h4>
            <p>{`${user.profile.firstName} ${user.profile.lastName}`}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>phone number</h4>
            <p>{user.profile.phoneNumber}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>email address</h4>
            <p>{user.email}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>bvn</h4>
            <p>{user.profile.bvn}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>gender</h4>
            <p>{user.profile.gender}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>marital status</h4>
            <p>{user.profile.maritalStatus}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>children</h4>
            <p>{user.profile.children}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>type of residence</h4>
            <p>{user.profile.address}</p>
          </div>
        </div>
      </article>
      <article className="userpage-personal__article">
        <h2 className="userpage-personal__article--title">education and employment</h2>
        <div className="userpage-personal__article--info">
          <div className="userpage-personal__article--info-single">
            <h4>level of education</h4>
            <p>{user.education.level}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>employment status</h4>
            <p>{user.education.employmentStatus}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>sector of employment</h4>
            <p>{user.education.sector}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>duration of employment</h4>
            <p>{user.education.duration}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>office email</h4>
            <p>{user.education.officeEmail}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>monthly income</h4>
            <p>&#8358;{user.education.monthlyIncome[0]} - &#8358;{user.education.monthlyIncome[1]}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>loan repayment</h4>
            <p>{user.education.loanRepayment}</p>
          </div>
        </div>
      </article>
      <article className="userpage-personal__article">
        <h2 className="userpage-personal__article--title">socials</h2>
        <div className="userpage-personal__article--info">
          <div className="userpage-personal__article--info-single">
            <h4>twitter</h4>
            <p>{user.socials.twitter}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>facebook</h4>
            <p>{user.socials.facebook}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>instagram</h4>
            <p>{user.socials.instagram}</p>
          </div>
        </div>
      </article>
      <article className="userpage-personal__article">
        <h2 className="userpage-personal__article--title">guarantor</h2>
        <div className="userpage-personal__article--info">
          <div className="userpage-personal__article--info-single">
            <h4>full name</h4>
            <p>{`${user.guarantor.firstName} ${user.guarantor.lastName}`}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>phone number</h4>
            <p>{user.guarantor.phoneNumber}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>address</h4>
            <p>{user.guarantor.address}</p>
          </div>
          <div className="userpage-personal__article--info-single">
            <h4>gender</h4>
            <p>{user.guarantor.gender}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PersonalInfo;