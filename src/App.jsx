import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from "./assets/logo.png";
import TrendsAI from "./Pages/FashionGpt.jsx";
import Footer from "./Components/Footer";
import "animate.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/TrendsAI" element={<TrendsAI />} />
          <Route
            path="/"
            element={
              <>
                <header className="animate__animated animate__zoomInDown flex justify-around items-center bg-white-700 p-4 text-white ">
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
                    Trends.AI
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.ajio.com/"
                    className="cursor-pointer bg-black inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-white-500 hover:text-white border-2 border-white-600 hover:bg-cyan-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-cyan-600 duration-300  focus:bg-transparent"
                  >
                    AJIO.com
                  </a>
                </header>
                <section className="w-full mx-auto bg-[#14141r] md:p-5 rounded-lg  mt-5 from-neutral-200 to-neutral-800 bg-clip-text  border-t-4">
                  <div>
                    <h1 className="animate__animated animate__zoomInDown mt-4 font-heading text-4xl font-bold animate-in slide-in-from-bottom-1/2 zoom-in-50 text-center text-black bg-clip-text bg-gradient-to-br from-foreground to-gray-500 dark:[text-shadow:none] md:text-5xl lg:text-6xl xl:text-7xl duration-500 fade-in-2">
                      Welcome to Trends.AI
                    </h1>
                    <p className=" animate__animated animate__zoomInDown text-xs text-right text-gray-800 mr-4">
                      Powered by Mistral-AI
                    </p>
                  </div>
                  <p className="animate__animated animate__zoomInDown mt-6 font-medium md:max-w-lg text-center mx-auto mt-3 text-black-700 md:text-lg animate-in duration-500 zoom-in-50 fade-in-0">
                    Discover the latest trends, styles, and inspirations in
                    fashion with our AI-powered assistant by{" "}
                    <a
                      href="https://ajio.com"
                      className="text-blue-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AJIO.com
                    </a>
                  </p>
                </section>
                
                <h1 className="animate__animated animate__zoomInDown text-center  mt-6 text-2xl text-blue-700 w-full font-bold mr-80 ">
                  Try it now with these prompts:
                </h1>
                <section className="animate__animated animate__zoomInDown  bg-white  py-12 flex justify-evenly text-center">
                  <div className="flex flex-col items-center ml -10">
                  <ul className="text-black text-lg text-center">
          <li className="mb-2">
            1. "I'm going to a party, what should I wear?"
          </li>
          <li className="mb-2 ml-1">
            2. "What should I buy for this Diwali season?"
          </li>
          <li className="mb-2 ml-8">
            3. "Any suggestions for a casual weekend outfit?"
          </li>
          <li className="mb-2 ml-24">
            4. "Help me find the perfect dress for my friend's birthday."
          </li>
        </ul>
                  </div>
                  <Link
                    to="/TrendsAI"
                    className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
                    title="Go Back"
                  >
                    <p className="animate__animated animate__zoomInDown text-black">
                      Excited!!! ... Let's give it a try{" "}
                    </p>
                    <div className="flex justify-end">
                      <div className="w-24 h-24 flex items-center justify-center bg-blue-500 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50px"
                          height="50px"
                          viewBox="0 0 24 24"
                          className="stroke-blue-300"
                          style={{ transform: "rotate(180deg)" }}
                        >
                          <path
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            d="M11 6L5 12M5 12L11 18M5 12H19"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </section>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
