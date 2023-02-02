import React from 'react';

const StatusCard = ({ type }: { type: number; }) => {
  const values = [
    { name: "blacklisted", className: "statusCard__red" },
    { name: "inactive", className: "statusCard__blue" },
    { name: "pending", className: "statusCard__yellow" },
    { name: "active", className: "statusCard__green" },
  ];
  return (
    <span className={values[type].className}>{values[type].name}</span>
  );
};

export default StatusCard;