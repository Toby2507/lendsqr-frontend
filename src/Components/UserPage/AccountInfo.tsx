import React, { useState } from 'react';
import { userInterface } from '../../Utils/interfaces';
import { IoStarOutline, IoStar } from 'react-icons/io5';
import { HiDotsVertical } from 'react-icons/hi';

type navType = "gen" | "doc" | "bank" | "loan" | "save" | "app";

const AccountInfo = ({ user }: { user: userInterface; }) => {
  console.log(user);
  const [showNav, setShowNav] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<navType>("gen");
  return (
    <section className="userpage-account">
      <div className="userpage-account__wrapper">
        <div className="userpage-account__info">
          <figure className="userpage-account__info--img">
            <img src={user.profile.avatar} alt={user.userName} />
          </figure>
          <div className="userpage-account__info--info">
            <h2>{user.userName}</h2>
            <p>{user.accountNumber}</p>
          </div>
        </div>
        <div className="userpage-account__tier">
          <p>user's tier</p>
          <div className="userpage-account__tier--star">
            {Array(user.userTier).fill(1).map((item, i) => <IoStar key={i} />)}
            {Array(3 - user.userTier).fill(1).map((item, i) => <IoStarOutline key={i} />)}
          </div>
        </div>
        <div className="userpage-account__savings">
          <h3>&#8358;{user.accountBalance}</h3>
          <p>9912345678/Providus Bank</p>
        </div>
      </div>
      <nav className="userpage-account__nav">
        <button className="userpage-account__nav--burger" onClick={() => setShowNav(!showNav)}><HiDotsVertical /></button>
        <ul className={`userpage-account__nav--navs ${showNav ? "open" : ""}`}>
          <li
            className={activeNav === "gen" ? "active" : ""}
            onClick={() => setActiveNav("gen")}
          >general details</li>
          <li
            className={activeNav === "doc" ? "active" : ""}
            onClick={() => setActiveNav("doc")}
          >documents</li>
          <li
            className={activeNav === "bank" ? "active" : ""}
            onClick={() => setActiveNav("bank")}
          >bank details</li>
          <li
            className={activeNav === "loan" ? "active" : ""}
            onClick={() => setActiveNav("loan")}
          >loans</li>
          <li
            className={activeNav === "save" ? "active" : ""}
            onClick={() => setActiveNav("save")}
          >savings</li>
          <li
            className={activeNav === "app" ? "active" : ""}
            onClick={() => setActiveNav("app")}
          >app and system</li>
        </ul>
      </nav>
    </section>
  );
};

export default AccountInfo;