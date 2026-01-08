const ViewDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 animate-pulse">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="h-96 bg-gray-300 rounded-2xl" />

            <div className="space-y-6">
              <div className="h-8 bg-gray-300 rounded w-3/4" />
              <div className="h-4 bg-gray-300 rounded w-1/3" />
              <div className="h-6 bg-gray-300 rounded w-1/4" />
              <div className="h-4 bg-gray-300 rounded w-1/2" />

              <div className="flex gap-4 pt-6">
                <div className="h-12 bg-gray-300 rounded-xl w-36" />
                <div className="h-12 bg-gray-300 rounded-xl w-36" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-20 bg-gray-300 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsSkeleton;
