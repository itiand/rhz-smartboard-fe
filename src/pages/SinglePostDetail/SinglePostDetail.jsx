import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const SinglePostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  console.log("postId", postId);

  // Mock data for demo - in real app, fetch this based on postId
  const post = {
    id: postId,
    image: `https://placehold.co/800x800/e0e0e0/888888?text=Post+${postId}`,
    caption:
      "This is a beautiful shot I took last weekend. #photography #nature",
    likes: 243,
    comments: 18,
    user: {
      name: "Alex Johnson",
      avatar: "https://placehold.co/50x50/e0e0e0/888888",
    },
    created: "2 days ago",
  };

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <div>SinglePostDetail</div>
      <div>
        <h1>Post ID is {postId}</h1>
      </div>
      <div className="single-post-container max-w-4xl mx-auto bg-white my-8 rounded-lg overflow-hidden">
        <div className="p-4 border-b flex items-center">
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>

      <div className="flex">
        <div id="left">
          <img src={post.image} alt={post.caption} />
        </div>
        <div id="right">
          <div>
            <h2>{post.caption}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostDetail;
