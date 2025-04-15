import FeedCard from "../../components/FeedCard/FeedCard";
import EditSmartboardForm from "../../components/EditSmartboardForm/EditSmartboardForm";

const Components = () => {
  const feedCards = [
    {
      title: "Tech News",
      image:
        "https://images.unsplash.com/photo-1741648711665-e1a8003b7891?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Technology",
    },
    {
      title: "Sports Update",
      image:
        "https://plus.unsplash.com/premium_photo-1679864497965-57c00454dbd0?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Sports",
    },
    {
      title: "Health Tips",
      image: "https://placehold.co/200x500",
      category: "Health",
    },
    {
      title: "Business Insights",
      image:
        "https://images.unsplash.com/photo-1741683386377-f59badc91174?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Business",
    },
    {
      title: "Travel Guide",
      image: "https://placehold.co/400x600",
      category: "Travel",
    },
    {
      title: "Food Recipes",
      image: "https://placehold.co/700x500",
      category: "Food",
    },
    {
      title: "Science News",
      image: "https://placehold.co/900x400",
      category: "Science",
    },
    {
      title: "Entertainment",
      image: "https://placehold.co/300x600",
      category: "Entertainment",
    },
    {
      title: "Education",
      image: "https://placehold.co/500x800",
      category: "Education",
    },
    {
      title: "Fashion Trends",
      image: "https://placehold.co/100x600",
      category: "Fashion",
    },
    {
      title: "Fashion Trends",
      image: "https://placehold.co/600x100",
      category: "Fashion",
    },
    {
      title: "Fashion Trends",
      image:
        "https://plus.unsplash.com/premium_photo-1679492942912-a7dc8d5be711?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Fashion",
    },
  ];

  return (
    <div className="grey-border container flex flex-col items-center justify-center gap-2">
      <div className="component-list flex flex-col gap-6">
        <div className="component-list-item">
          <h1 className="text-xl font-bold">Edit Smartboard Form</h1>
          <EditSmartboardForm />
        </div>
        <div className="component-list-item">
          <h1 className="text-xl font-bold">Feed Cards</h1>
          <div className="masonry-grid red-border columns-1 gap-2 p-2 sm:columns-2 sm:p-4 lg:columns-3">
            {feedCards.map((card, index) => (
              <div
                key={index}
                className="masonry-grid__item mb-2 break-inside-avoid sm:mb-4"
              >
                <FeedCard
                  title={card.title}
                  category={card.category}
                  image={card.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
