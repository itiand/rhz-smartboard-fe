import styles from "./FeedCard.module.css";

const FeedCard = (props) => {
  const { title, description, image } = props;
  return (
    <div className="grey-border flex flex-col gap-2">
      <div className="img-block">
        <img src={image} alt="placeholder" className="object-cover" />
      </div>
      <div className="flex flex-col gap-1 p-2">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeedCard;
