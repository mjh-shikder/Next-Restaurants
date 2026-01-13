import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import { resolve } from "styled-jsx/css";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch";
const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`
    ,{next:{revalidate: 10}}
  );
  const data = await res.json();
  // await new Promise((resolve)=>setTimeout(resolve, 1000))
  return data.foods || [];
};
const FoodsPage = async ({ searchParams }) => {
    
    const {search = ""} = await searchParams
    
    const foods = await getFoods(search);
  
    
    
  return (
    <div>
      <h2 className="text-4xl font-bold">
        Total Foods <span className="text-amber-500">{foods.length}</span>{" "}
          </h2>
          <div className="my-4 ">
              <InputSearch></InputSearch>
          </div>

      <div className="flex gap-5 ">
        <div className="flex-1 grid my-5 grid-cols-3 gap-5 ">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
        <div className="w-62.5 border-2 rounded-xl p-4 mt-5  ">
          <h2 className="text-2xl font-bold text-center ">Cart Items</h2>
                  <hr />
                  <div className="my-5">
                      <CartItems></CartItems>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
