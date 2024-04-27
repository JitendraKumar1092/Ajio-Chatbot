import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../assets/Loader";
import logo from "../assets/logo.png";
import Card from "../Components/Card";
import TypeWriter from "../Components/TypewriterText";

const TrendsAI = () => {
  const [inputText, setInputText] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when data fetching starts
    try {
      const response = await fetch(
        "https://ajio-gpt.vercel.app/api/products/swimsuit",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);

      setResponseData(data.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false); // Set loading to false when data fetching completes
    }
  };

  return (
    <>
      {" "}
      <header className="flex justify-around items-center bg-white p-4 text-white border-b border-gray-800">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-16 left-20 h-auto rounded-full object-contain border-2 border-gray-300  bg-[#1c1c1c]"
          />
        </Link>
        <a
          href="https://github.com/jitendrakumar1092/Ajio-chatbot"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
        >
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFFFFF"
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            ></path>
          </svg>
          Trends AI
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.ajio.com/"
          className="cursor-pointer inline-flex bg-black items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-white-500 hover:text-white border-2 border-white-600 hover:bg-cyan-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-cyan-600 duration-300  focus:bg-transparent"
        >
          AJIO.com
        </a>
      </header>
      <section className="max-w-7xl mx-auto bg-[#14141r] md:p-5 rounded-lg shadow-md mt-5 from-neutral-200 to-neutral-800 bg-clip-text">
        <div>
          <h1 className="mt-4 font-heading text-4xl font-bold animate-in slide-in-from-bottom-1/2 zoom-in-50 text-center text-black bg-clip-text bg-gradient-to-br from-foreground to-gray-500 dark:[text-shadow:none] md:text-5xl lg:text-6xl xl:text-7xl duration-500 fade-in-2">
            AJIO's Trends AI
          </h1>
          <p className="text-xs text-right text-gray-500 mr-4">
            Powered by Mistral-AI
          </p>
        </div>
        <p className="mt-6 font-medium md:max-w-lg text-center mx-auto mt-3 text-black-400 md:text-lg animate-in duration-500 zoom-in-50 fade-in-0">
          Empowering Your Style Evolution: AJIO Trends AI - Your Personalized
          Fashion Companion by{" "}
          <a
            href="https://ajio.com"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            AJIO.com
          </a>
        </p>
      </section>
      <div className="flex flex-col items-center">
        <div className="max-w-xl mx-auto p-4">
          
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              className="h-14 w-80 bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-blue-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-blue-400 dark:shadow-md dark:shadow-purple-500"
              autoComplete="off"
              placeholder="Enter your query"
              name="text"
              type="text"
              required
              value={inputText}
              onChange={handleChange}
            />

            <button className="ml-6 h-13 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">
              Submit
            </button>
          </form>
        </div>
        <div>
          {responseData.length > 0 ? (
            <div>{/* Display response data */}</div>
          ) : (
            <div className="mb-8 mt-8 ">
              <TypeWriter />
            </div>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center items-center w-full h-full">
            <Loader />
          </div>
        ) : (
          responseData && <Card products={responseData.slice(0, 9)} />
        )}
      </div>
    </>
  );
};

export default TrendsAI;
