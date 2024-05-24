import React from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../features/addcard/cardSlice";

function Cards() {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  return (
     <div>
      <h1>My list!</h1>
      <div className="product-list">
      {cards.length > 0 ? (
        cards.map((product) => (
          <div key={product.id} className="shopping-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="card-content">
              <h2 className="product-title">{product.title}</h2>
              <div className="rating">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
              <p className="product-description">{product.description}</p>
              <button
                className="remove-button"
                onClick={() => dispatch(removeCard(product.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="empty-list">No products in the list!</p>
      )}
    </div>
     </div>
  );
}

export default Cards;
