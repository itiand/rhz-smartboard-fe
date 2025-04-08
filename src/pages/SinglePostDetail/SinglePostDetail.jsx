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
          name: "Sarah_Parker",
          avatar: "https://placehold.co/50x50/e0e0e0/777777",
        },
        text: "Absolutely stunning! Where was this taken?",
        posted: "2023-06-15T10:45:00Z",
      },
      {
        id: 2,
        user: {
          name: "Michael_Rodriguez",
          avatar: "https://placehold.co/50x50/e0e0e0/666666",
        },
        text: "The lighting in this shot is perfect! What camera did you use?",
        posted: "2023-06-15T12:30:00Z",
      },
      {
        id: 3,
        user: {
          name: "Emily_Chen",
          avatar: "https://placehold.co/50x50/e0e0e0/555555",
        },
        text: "This reminds me of my trip last summer. Great composition! #travel #nature #naturephotography    longer comment extra text trugfdgdfsdfdsfdsagdas dfas ",
        posted: "2023-06-16T09:15:00Z",
      },
      {
        id: 4,
        user: {
          name: "John_Doe",
          avatar: "https://placehold.co/50x50/e0e0e0/444444",
        },
        text: "This is a beautiful shot I took last weekend. #photography #nature",
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
        <div id="post-details" className="blue-border col-span-2 p-4">
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
          <div className="comments blue-border">
            <p className="text-xs mb-2">{post.comments.length} comments</p>
            <div className="comments-list green-border flex flex-col gap-y-3">
              {post.comments.map((comment) => (
                <div
                  className="comment-item flex  gap-x-1 text-xs green-border py-1"
                  key={comment.id}
                >
                  <div className="profile-image pt-0.5">
                    <img
                      src={comment.user.avatar}
                      alt={comment.user.name}
                      className="w-full h-auto rounded-full max-w-9 max-h-9"
                    />
                  </div>
                  <div className="comment-text flex-1">
                    <p className="font-bold">{comment.user.name}</p>
                    <p>{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostDetail;
