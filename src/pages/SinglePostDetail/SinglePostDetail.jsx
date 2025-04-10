import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./SinglePostDetail.css";
import { formatDistanceToNow } from "date-fns";
// Import Lucide icons
import { Heart, Share, Download } from "lucide-react";

const SinglePostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

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

      <div className="grid grid-cols-5 gap-4 mb-50 grey-border">
        {/* POST IMAGE - LEFT COLUMN */}
        <div className="left col-span-3 flex items-center justify-center">
          <img src={post.image} alt={post.caption} />
        </div>

        {/* POST DETAILS - RIGHT COLUMN */}
        <div className="right post-details-column col-span-2 p-4 flex flex-col gap-y-4">
          {/* POST TITLE AND HEART ICON */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl">{post.title}</h2>
            <button className="like-button" aria-label="Like post">
              <Heart aria-hidden="true" size={20} />
            </button>
          </div>
          <div className="border-t border-gray-300"></div>
          {/* POST DETAILS */}
          <div className="text-xs leading-5">
            <p>
              Added{" "}
              {formatDistanceToNow(new Date(post.added), {
                addSuffix: true,
              })}
            </p>
            <p>
              Project by <strong>{post.user.name}</strong>
            </p>
            {/* CALCULATE AGO */}
            <p>
              Last updated{" "}
              {formatDistanceToNow(new Date(post.lastUpdated), {
                addSuffix: true,
              })}
            </p>
            <p>Source</p>
          </div>
          <div className="border-t border-gray-300"></div>
          <div className="flex gap-x-2 text-xs">
            <button className="share-button" aria-label="Share post">
              <Share aria-hidden="true" size={15} />
            </button>
            <button className="download-button" aria-label="Download post">
              <Download aria-hidden="true" size={15} />
            </button>
          </div>

          {/* COMMENTS SECTION */}
          <div className="comments pb-3">
            <p className="text-xs mb-2">{post.comments.length} comments</p>
            {/* COMMENT LIST */}
            <div className="comments-list flex flex-col gap-y-2">
              {/* COMMENT ITEM */}
              {post.comments.map((comment) => (
                <div
                  className="comment-item flex  gap-x-1 text-xs  py-1"
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
                    <p className="leading-5">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ADD TO SMARTBOARD */}
          <div className="add-to-smartboard p-2 rounded-full text-center border max-w-64 border-gray-300  self-center w-full">
            <p>Add to smartboard</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostDetail;
