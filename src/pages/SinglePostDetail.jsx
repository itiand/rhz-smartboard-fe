import React from "react";
import { useNavigate, useParams } from "react-router-dom";  

const SinglePostDetail = () => {

  const { postId } = useParams();
  console.log("postId", postId);


  // Mock data for demo - in real app, fetch this based on postId
  const post = {
    id: postId,
    image: `https://placehold.co/800x800/e0e0e0/888888?text=Post+${postId}`,
    caption: "This is a beautiful shot I took last weekend. #photography #nature",
    likes: 243,
    comments: 18,
    user: {
      name: "Alex Johnson",
      avatar: "https://placehold.co/50x50/e0e0e0/888888"
    },
    created: "2 days ago"
  };

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <div>SinglePostDetail</div>
      <div>
        <h1>Post ID is {postId}</h1>
      </div>
    </>
  )
};

export default SinglePostDetail;