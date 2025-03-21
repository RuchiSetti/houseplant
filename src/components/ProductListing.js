import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../css/ProductListing.css";

const products = [
  { id: 1, name: "Fern", price: 15, category: "Low Light", image: "/images/fern.jpg" },
  { id: 2, name: "Cactus", price: 12, category: "Succulent", image: "/images/cactus.jpg" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering", image: "/images/peacelily.jpg" },
  { id: 4, name: "Aloe Vera", price: 18, category: "Succulent", image: "/images/aloe.jpg" },
  { id: 5, name: "Snake Plant", price: 22, category: "Low Light", image: "/images/snakeplant.jpg" },
  { id: 6, name: "Orchid", price: 30, category: "Flowering", image: "/images/orchid.jpg" },
];

const ProductListing = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shop Houseplants</h2>
      <div className="products">
        {products.map((plant) => (
          <div key={plant.id} className="product">
            <img src={plant.image} alt={plant.name} className="product-image"/>
            <h3>{plant.name}</h3>
            <p>Category: {plant.category}</p>
            <p>${plant.price}</p>
            <button onClick={() => dispatch(addToCart(plant))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
