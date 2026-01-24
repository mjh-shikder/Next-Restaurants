import React from 'react';

const FeedBackCardSkeleton = () => {
    return (
      <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 animate-pulse">
        {/* Message skeleton */}
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-5"></div>

        {/* ID skeleton */}
        <div className="h-3 bg-gray-200 rounded w-1/3 mb-5"></div>

        {/* Buttons skeleton */}
        <div className="flex gap-3">
          <div className="h-9 w-20 bg-gray-200 rounded-lg"></div>
          <div className="h-9 w-20 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
};

export default FeedBackCardSkeleton;