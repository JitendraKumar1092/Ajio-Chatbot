// Chatbot.js
import React, { useState } from "react";
import Card from "./Components/Card";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [res, setRes] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //make a post request to the "http://localhost:3000/api/products" and pass the inputText as the body as query attribute
      const response = await fetch('https://ajio-gpt.vercel.app/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: inputText }),
      });  

 
      const data = await response.json();
      console.log(data);

      setResponseData(data.data); // Assuming the products array is nested under 'data'
      setRes(true);

    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };


  return (
    <>
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold">Fashion-GPT</h1>
    </div>
    <div className="max-w-xl mx-auto p-4 flex flex-col items-center border border-5px border-green-700">
      <form onSubmit={handleSubmit} className="mb-4 w-full">
        <input
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          placeholder="Enter your query..."
          className="w-full border rounded p-2 mb-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
    {responseData && <Card products={responseData} />}
  </>
  
  );
};

export default App;
