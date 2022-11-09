import "../sass/Card.scss";

const Card = (props) => {
  const {name, img} = props
  return (
    <div className="card">
      <p className="card__name">{name}</p>
      <div className="card__circle"></div>
      <img src={img} alt="Pokemon img" className="card__img" />
    </div>
  );
};

export default Card;
