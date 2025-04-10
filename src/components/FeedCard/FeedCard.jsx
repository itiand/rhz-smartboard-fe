import styles from "./FeedCard.module.css";

const FeedCard = (props) => {
  const { title, description, image } = props;
  return (
    <div className="grey-border flex flex-col gap-2">
      <div className="img-block">
        <img src={image} alt="placeholder" className="object-cover" />
      </div>
      <div className="flex flex-col gap-1 p-2 pb-4">
        <div className="artist-info flex flex-row gap-2 items-center">
          <div className="profile-image pt-0.5">
            <img
              src={image}
              alt="placeholder"
              className="object-cover w-full h-auto aspect-square rounded-full max-w-7 max-h-7 md:max-w-9 md:max-h-9"
            />
          </div>
          <div className="artist-name">
            <p className="text-sm font-bold">Artist Name</p>
            <p className="text-xs text-gray-500">category</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
