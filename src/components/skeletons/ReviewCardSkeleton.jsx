import React from 'react';

const ReviewCardSkeleton = () => {
    return (
      <div className="bg-white rounded-xl shadow-md p-5 max-w-xl animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-300 rounded" />
            <div className="h-3 w-24 bg-gray-200 rounded" />
          </div>
        </div>

        <div className="flex gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-5 h-5 bg-gray-300 rounded" />
          ))}
        </div>

        <div className="space-y-2 mt-4">
          <div className="h-4 bg-gray-300 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-4/6" />
        </div>

        <div className="h-5 w-16 bg-gray-300 rounded mt-4" />
      </div>
    );
};

export default ReviewCardSkeleton;