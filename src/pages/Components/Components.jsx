import FeedCard from "../../components/FeedCard/FeedCard";
import EditSmartboardForm from "../../components/EditSmartboardForm/EditSmartboardForm";

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
      <div className="component-list flex flex-col gap-6">
        <div className="component-list-item">
          <h1 className="text-xl font-bold">Edit Smartboard Form</h1>
          <EditSmartboardForm />
        </div>
        <div className="component-list-item">
          <h1 className="text-xl font-bold">Feed Card</h1>
          <FeedCard
            title={feedCards[0].title}
            category={feedCards[0].category}
            image={feedCards[0].image}
          />
        </div>
      </div>
    </div>
  );
};

export default Components;
