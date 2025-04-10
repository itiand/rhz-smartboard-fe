import styles from "./FeedCard.module.css";

const FeedCard = () => {
  return (
    <div className="grey-border flex flex-col gap-2">
      <img
        src="https://placehold.co/600x400"
        alt="placeholder"
        className="block"
      />
      <div className="flex flex-col gap-2">
        <h2>Title</h2>
        <p>Description</p>
      </div>
    </div>
  );
};

export default FeedCard;
