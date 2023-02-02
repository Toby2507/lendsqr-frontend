interface infoboxInterface {
  img: string;
  title: string;
  amount: string;
}

const DashboardInfoBox = ({ img, title, amount }: infoboxInterface) => {
  return (
    <article className="dashboard-infobox__info">
      <figure className="dashboard-infobox__info--img">
        <img src={img} alt={title} />
      </figure>
      <h2 className="dashboard-infobox__info--title">{title}</h2>
      <span className="dashboard-infobox__info--amount">{amount}</span>
    </article>
  );
};

export default DashboardInfoBox;