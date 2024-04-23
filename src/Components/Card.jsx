import React from "react";

const Card = ({ products }) => {
  // Dummy image URL for placeholder
  const dummyImageUrl =
    "https://media.istockphoto.com/id/488160041/photo/mens-shirt.jpg?s=612x612&w=0&k=20&c=xVZjKAUJecIpYc_fKRz_EB8HuRmXCOOPOtZ-ST6eFvQ=";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
          style={{ margin: "10px", widows: "200px" }} // Added margin style
        >
          <img
            src={product.image || dummyImageUrl}
            alt={product.name}
            className="h-48 w-full object-cover"
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700">Brand: {product.brand}</p>
              <p className="text-gray-700">Color: {product.color}</p>
              <p className="text-gray-700">Category: {product.category}</p>
              <p className="text-gray-700">Price: ${product.price}</p>
              <p className="text-gray-700">Occasion: {product.occasion}</p>
              <p className="text-gray-700">Size: {product.size}</p>
              <p className="text-gray-700">{product.description}</p>
            </div>
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Add to Cart
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
