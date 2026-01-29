import FeedbackCard from "@/components/cards/FeedbackCard";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "feedbacks",
};

const getFeedBack = async () => {
  const res = await fetch("http://localhost:3000/api/feedback/");
  return await res.json();
};

const FeedBackPage = async () => {
  const feedback = await getFeedBack();
  console.log(feedback);

  return (
    <div>
      <div className="">
        <h2 className="text-2xl font-bold ">
          {feedback.length} Feedbacks Found
        </h2>
        <div className="my-7 ">
          <Link href={"/feedback/add"} className="btn ">
            Add Feedback
          </Link>
        </div>
        <div className="my-3 space-y-5 ">
          {feedback.map((fd) => (
            <FeedbackCard key={fd._id} feedback={fd}></FeedbackCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedBackPage;
