import React from "react";
import "./Home.css";

import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../features/addcard/cardSlice";

function Home() {
  const products = [
    {
      id: 1,
      title: "Product 1",
      image:
        "https://images.pexels.com/photos/4939936/pexels-photo-4939936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4,
      description: "This is a brief description of product 1.",
    },
    {
      id: 2,
      title: "Product 2",
      image:
        "https://images.pexels.com/photos/4164088/pexels-photo-4164088.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      description: "This is a brief description of product 2.",
    },
    {
      id: 3,
      title: "Product 3",
      image:
        "https://images.pexels.com/photos/5469880/pexels-photo-5469880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 3,
      description: "This is a brief description of product 3.",
    },
    {
      id: 4,
      title: "Product 4",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 3,
      description: "This is a brief description of product 3.",
    },
    {
      id: 5,
      title: "Product 5",
      image:
        "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 3,
      description: "This is a brief description of product 3.",
    },
    {
      id: 6,
      title: "Product 6",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 3,
      description: "This is a brief description of product 3.",
    },
    {
      id: 7,
      title: "Product 7",
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 3,
      description: "This is a brief description of product 3.",
    },
    {
      id: 8,
      title: "Product 8",
      image:
        "https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 3,
      description: "This is a brief description of product 3.",
    },
    // Add more products as needed
  ];
  const dispatch = useDispatch();
  return (
    <div className="home">
      <header className="header">
        <h1>Welcome to DM's Store</h1>
      </header>
      <div className="product-list">
        {products.map((product) => (
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
                className="add-to-cart-button"
                onClick={() =>
                  dispatch(
                    addCard({
                      id: product.id,
                      title: product.title,
                      image: product.image,
                      rating: product.rating,
                      description: product.description,
                    })
                  )
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <footer className="footer">
        <p>&copy; 2024 DM's Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
