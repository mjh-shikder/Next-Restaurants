import Link from "next/link";
import CartButton from "../buttons/CartButton";

const FoodCard = ({ food, onAddToCart, onViewDetails }) => {
  const { title, foodImg, price, category, id } = food;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={foodImg}
          alt={title}
          className="h-full w-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 bg-stone-50">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

        <p className="text-sm text-gray-500 mt-1">Category: {category}</p>

        <p className="text-xl font-bold text-amber-500 mt-2">৳{price}</p>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
         <CartButton></CartButton>

          <Link
            href={`/foods/${id}`}
            onClick={onViewDetails}
            className="flex-1 text-center border border-primary text-amber-500 py-2 
            rounded-lg hover:bg-primary hover:text-stone-600 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
