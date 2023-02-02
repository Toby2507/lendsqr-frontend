const StatusCard = ({ type }: { type: string; }) => {
  const values = {
    Blacklisted: { name: "blacklisted", className: "statusCard__red" },
    Inactive: { name: "inactive", className: "statusCard__blue" },
    Pending: { name: "pending", className: "statusCard__yellow" },
    ActiveUser: { name: "active", className: "statusCard__green" },
  };
  return (
    <span className={values[type as keyof typeof values].className}>{values[type as keyof typeof values].name}</span>
  );
};

export default StatusCard;