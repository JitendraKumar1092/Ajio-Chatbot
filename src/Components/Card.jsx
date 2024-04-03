// Card.js
import React from "react";

const Card = ({ products }) => {
  // Dummy image URL for placeholder
  const dummyImageUrl = "https://media.istockphoto.com/id/488160041/photo/mens-shirt.jpg?s=612x612&w=0&k=20&c=xVZjKAUJecIpYc_fKRz_EB8HuRmXCOOPOtZ-ST6eFvQ=";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <div key={index} className="bg-white rounded shadow p-4 flex">
          <img src={product.image} alt={product.name} className="h-24 w-24 object-cover rounded" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700">Brand: {product.brand}</p>
            <p className="text-gray-700">Color: {product.color}</p>
            <p className="text-gray-700">Category: {product.category}</p>
            <p className="text-gray-700">Price: ${product.price}</p>
            <p className="text-gray-700">occasion: {product.occasion}</p>
            <p className="text-gray-700">Size: {product.size}</p>
            <p className="text-gray-700">{product.description}</p>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Card;
