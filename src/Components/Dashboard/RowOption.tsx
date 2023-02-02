import React, { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { BiUserCheck, BiUserX } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const RowOption = ({ userId }: { userId: string; }) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  return (
    <div className="row-options">
      <button className="row-options__btn" onClick={() => setShowOptions(!showOptions)}>
        <HiDotsVertical />
      </button>
      {showOptions && (
        <div className="row-options__box">
          <Link to={`/user/${userId}`}>
            <div className="row-options__box--item">
              <BsEye />
              <p>view details</p>
            </div>
          </Link>
          <div className="row-options__box--item">
            <BiUserX />
            <p>blacklist user</p>
          </div>
          <div className="row-options__box--item">
            <BiUserCheck />
            <p>activate user</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RowOption;