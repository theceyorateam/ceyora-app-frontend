import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";

const ReviewCard = ({ userName, userImage, rating, comment, date, reply, onReply }) => {
  const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true });
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyText.trim() !== "") {
      onReply(replyText);
      setReplyText("");
      setShowReplyBox(false);
    }
  };

  return (
    <div className="px-4 py-6 border-b border-gray-100 space-y-3">
      {/* User Review */}
      <div className="flex items-start gap-3">
        {userImage ? (
          <img
            src={userImage}
            alt={userName}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white text-sm">
            {userName[0]}
          </div>
        )}
        <div className="flex-1">
          <p className="text-teakwood-brown font-semibold">{userName}</p>
          <div className="flex items-center mb-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`mr-1 text-lg ${i < rating ? "text-sun-gold" : "text-gray-300"
                  }`}
                aria-hidden="true"
              >
                ★
              </span>
            ))}
            <span className="text-sm text-ocean-mist ml-1">({rating.toFixed(1)})</span>
          </div>
          <div className="bg-ceyora-clay bg-opacity-10 p-3 rounded-xl border-ceyora-clay border-r-4 max-w-[80%] text-left">

            {/* <div className="bg-soft-cream p-3 rounded-xl inline-block max-w-[80%]"> */}
            <p className="text-ocean-mist text-sm">"{comment}"</p>
            <p className="text-xs text-right text-ocean-mist mt-1">{formattedDate}</p>
          </div>
        </div>
      </div>

      {/* Reply */}
      {reply ? (
        <div className="flex justify-end">
          <div className="bg-palm-green bg-opacity-10 p-3 rounded-xl border-l-4 border-palm-green max-w-[80%] text-right">
            <p className="text-sm text-teakwood-brown">"{reply}"</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-end">
          {showReplyBox ? (
            <form
              onSubmit={handleReplySubmit}
              className="flex flex-col items-end space-y-2 w-full max-w-[80%]"
            >
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="w-full p-2 border rounded text-sm"
                rows={2}
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowReplyBox(false)}
                  className="text-sm text-ocean-mist hover:underline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-ceyora-clay text-white text-sm px-4 py-1 rounded hover:bg-palm-green"
                >
                  Post Reply
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setShowReplyBox(true)}
              className="text-xs text-ocean-mist hover:underline"
            >
              + Reply as admin
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
