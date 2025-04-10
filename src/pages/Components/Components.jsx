import FeedCard from "../../components/FeedCard/FeedCard";

FeedCard;

const Components = () => {
  const feedCards = [
    {
      title: "Title",
      description: "Description",
      image: "https://placehold.co/600x400",
    },
  ];

  return (
    <div className="container grey-border flex flex-col gap-2 justify-center items-center h-screen">
      <h1>Components</h1>
      <FeedCard
        title="Title"
        description="Description"
        image="https://placehold.co/600x400"
      />
    </div>
  );
};

export default Components;
