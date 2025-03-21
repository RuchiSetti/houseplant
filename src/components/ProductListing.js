import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./ProductListing.css";

const products = [
  { id: 1, name: "Fern", price: 15, category: "Low Light" },
  { id: 2, name: "Cactus", price: 12, category: "Succulent" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering" },
];

const ProductListing = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shop Houseplants</h2>
      {products.map((plant) => (
        <div key={plant.id} className="product">
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => dispatch(addToCart(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
