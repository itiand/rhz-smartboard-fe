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
        <div id="post-details" className="blue-border col-span-2">
          <div>
            <h2>{post.title}</h2>
            <i>heart icon</i>
          </div>
          <div>
            <p>Added 1/21/23</p>
            <p>Project by Hedi Jimson</p>
            <p>Last updated 1 minute ago</p>
            <p>Source</p>
          </div>
          <div className="border-t border-gray-300"></div>
          <div>
            <p>share</p>
            <p>download</p>
          </div>
          <div className="comments">
            <p>{post.comments.length} comments</p>
            {post.comments.map((comment) => (
              <div className="comment-item" key={comment.id}>
                <div>
                  <img
                    src={comment.user.avatar}
                    alt={comment.user.name}
                    className="max-w-10 max-h-10 rounded-full"
                  />
                  <p>{comment.user.name}</p>
                </div>
                <div>
                  <p>{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostDetail;
