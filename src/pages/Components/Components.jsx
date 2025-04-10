import FeedCard from "../../components/FeedCard/FeedCard";

FeedCard;

const Components = () => {
  const feedCards = [
    {
      title: "Title",
      image: "https://placehold.co/600x400",
      category: "Category",
    },
  ];

  return (
    <div className="container grey-border flex flex-col gap-2 justify-center items-center h-screen">
      <h1>Components</h1>
      <FeedCard
        title={feedCards[0].title}
        category={feedCards[0].category}
        image={feedCards[0].image}
      />
    </div>
  );
};

export default Components;
