const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
      {/* Message */}
      <p className="text-gray-800 text-base mb-4">{feedback?.message}</p>

      {/* ID */}
      <p className="text-xs text-gray-400 mb-4">ID: {feedback?._id}</p>
    

      {/* Actions */}
      <div className="flex gap-3">
        <button
          
          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
        >
          Update
        </button>

        <button
         
          className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
