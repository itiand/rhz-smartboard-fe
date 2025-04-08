import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const SinglePostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  console.log("postId", postId);

  // Mock data for demo - in real app, fetch this based on postId
  const post = {
    id: postId,
    title: "Post Title",
    image: `https://placehold.co/400x400/e0e0e0/888888?text=Post+${postId}`,
    caption:
      "This is a beautiful shot I took last weekend. #photography #nature",
    likes: 243,
    added: "2023-06-15T08:30:00Z",
    lastUpdated: "2023-06-16T14:22:00Z",
    user: {
      name: "Alex Johnson",
      avatar: "https://placehold.co/50x50/e0e0e0/888888",
    },
    created: "2023-06-15T08:30:00Z",
    comments: [
      {
        id: 1,
        user: {
          name: "Sarah Parker",
          avatar: "https://placehold.co/50x50/e0e0e0/777777",
        },
        text: "Absolutely stunning! Where was this taken?",
        posted: "2023-06-15T10:45:00Z",
      },
      {
        id: 2,
        user: {
          name: "Michael Rodriguez",
          avatar: "https://placehold.co/50x50/e0e0e0/666666",
        },
        text: "The lighting in this shot is perfect! What camera did you use?",
        posted: "2023-06-15T12:30:00Z",
      },
      {
        id: 3,
        user: {
          name: "Emily Chen",
          avatar: "https://placehold.co/50x50/e0e0e0/555555",
        },
        text: "This reminds me of my trip last summer. Great composition!",
        posted: "2023-06-16T09:15:00Z",
      },
    ],
  };

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <div>SinglePostDetail</div>
      <div>
        <h1>Post ID is {postId}</h1>
      </div>
      <div className="p-4 flex items-center mb-4">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>

      <div className="grid grid-cols-5 gap-4 red-border">
        <div id="left" className="blue-border col-span-3">
          <img src={post.image} alt={post.caption} />
        </div>
        <div id="right" className="blue-border col-span-2">
          <div>
            <h2>{post.caption}</h2>
            <p>{post.likes} likes</p>
            <p>{post.comments.length} comments</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostDetail;
