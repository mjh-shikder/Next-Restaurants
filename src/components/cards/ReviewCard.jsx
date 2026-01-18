import { useState } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";

const ReviewCard = ({ SingleReview }) => {
   
    const [like, setLike]=useState(false)
    const handleLike = () => {
        setLike(!like)
    }

  const { user, photo, rating, review, date } = SingleReview;

  return (
    <div className="bg-white rounded-xl shadow-md p-5 max-w-xl">
      {/* User Info */}
      <div className="flex items-center gap-4">
        {/* <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
        /> */}
        <Image
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
          width={48}
          height={48}
        ></Image>
        <div>
          <h4 className="font-semibold text-gray-800">{user}</h4>
          <p className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mt-3 leading-relaxed">{review}</p>

      {/* Actions */}
      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 text-sm transition ${
            like ? "text-red-500" : "text-gray-500 hover:text-red-400"
          }`}
        >
          <Heart size={18} fill={like ? "currentColor" : "none"} />
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
