import styles from "./FeedCard.module.css";
import { Heart, Share, MessageCircle } from "lucide-react";

const FeedCard = (props) => {
  const { title, category, image } = props;
  return (
    <div className="grey-border flex flex-col gap-2 md:max-w-120">
      <div className="img-block relative">
        <div className="badge text-dark-gray absolute top-2 left-2 inline-flex items-center rounded-full border border-white bg-white px-3 py-1 text-xs shadow-md">
          Sale
        </div>
        <div className="img-container">
          <img src={image} alt="placeholder" className="object-cover" />
        </div>
      </div>
      <div className="flex flex-row justify-between gap-1 p-2 pb-4">
        <div className="artist-info flex flex-row items-center gap-2">
          <div className="profile-image pt-0.5">
            <img
              src={image}
              alt="placeholder"
              className="aspect-square h-auto max-h-9 w-full max-w-9 rounded-full object-cover md:max-h-10 md:max-w-10"
            />
          </div>
          <div className="artist-name">
            <p className="text-sm font-bold">{title}</p>
            <p className="text-xs text-gray-500">{category}</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <MessageCircle aria-hidden="true" size={20} />
          <Heart aria-hidden="true" size={20} />
          <Share aria-hidden="true" size={20} />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
