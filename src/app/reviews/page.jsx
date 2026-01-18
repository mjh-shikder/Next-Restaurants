import React from 'react';
import ReviewsPage from './ReviewPage';


export const metadata = {
  title: "All Reviews",
  description: "Best Restaurants in The town",
};

const page = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default page;