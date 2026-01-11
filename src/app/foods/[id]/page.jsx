import React from "react";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.details;
};

const ViewDetails = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-red-500">Food Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Glass Card */}
        <div className="backdrop-blur-md bg-stone-900 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 lg:p-10">
            {/* Image */}
            <div className="relative group rounded-2xl overflow-hidden">
              <img
                src={food.foodImg}
                alt={food.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-4 left-4 px-4 py-1 text-sm rounded-full bg-black/60 text-white">
                {food.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between">
              <div className="space-y-5">
                <h1 className="text-4xl font-bold text-gray-300 leading-tight">
                  {food.title}
                </h1>

                <p className="text-gray-500 text-sm">
                  Cuisine • <span className="font-medium">{food.area}</span>
                </p>

                <div className="text-3xl font-extrabold text-primary">
                  ৳{food.price}
                </div>

                {/* Video */}
                {food.video && (
                  <a
                    href={food.video}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    ▶ Watch how it's made
                  </a>
                )}
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-xl bg-primary text-white font-semibold shadow-lg hover:scale-105 transition">
                  Add to Cart
                </button>

                <button className="px-8 py-4 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                  Back to Menu
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Info */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Category", value: food.category },
            { label: "Cuisine", value: food.area },
            { label: "Type", value: "Premium" },
            { label: "Availability", value: "In Stock" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 shadow-sm text-center"
            >
              <p className="text-sm text-gray-400">{item.label}</p>
              <p className="font-semibold text-gray-800">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
