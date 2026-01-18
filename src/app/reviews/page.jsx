import React from 'react';
import ReviewsPage from './ReviewPage';


export const metadata = {
  title: {absolute: "Satisfied Users"},
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