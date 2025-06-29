"use client";
import React, { useState } from "react";
import "nes.css/css/nes.min.css";
import Image from "next/image";

export default function Footer() {
  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    setShowDialog((prev) => !prev);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      {/* Pokéball Icon at Bottom Left */}
      <footer className="fixed bottom-5 left-5 z-50">
        <button
          onClick={toggleDialog}
          className="cursor-pointer p-0 border-none bg-transparent focus:outline-none focus:ring-0 focus-visible:outline-none"
        >
          <Image
            src="/cyborg-unscreen.gif"
            width={200}
            height={200}
            alt="Cyborg Trigger"
            tabIndex={-1}
            draggable={false}
          />
        </button>
      </footer>

      {/* Dialog Overlay */}
      {showDialog && (
        <div
          onClick={closeDialog}
          className="fixed inset-0 bg-[rgba(200,200,200,0.6)] flex items-center justify-center z-40"
        >
          <div
            className="nes-dialog w-[80rem] shadow-md bg-white border border-gray-700 px-10 py-6 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <i className="snes-jp-logo text-4xl"></i>
              <span className="nes-text is-primary text-2xl font-bold">
                Projects
              </span>
            </div>

            {/* Project Containers Column */}
            <div className="flex flex-col gap-6 max-h-[30rem] overflow-y-auto pr-2 scrollbar-hide">
              {/* Container 1 - Black */}
              <div className="nes-container is-dark with-title text-white">
                <p className="title">Gender Detection</p>
                <p>
                  <a
                    href="https://github.com/Chauhan-Ujjawal/gender-prediction-using-deep-learning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#662d91] no-underline transition-colors duration-200"
                  >
                    Realtime Gender Prediction Model Using Deep Learning
                  </a>
                </p>
              </div>

              {/* Container 2 - White */}
              <div className="nes-container with-title">
                <p className="title">Machine Learning Models</p>
                <ol className="list-decimal list-inside text-sm pl-4 space-y-1">
                  <li>
                    <a
                      href="https://github.com/Chauhan-Ujjawal/Brainwave_Matrix_Intern"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-[#662d91] no-underline transition-colors duration-200"
                    >
                      Fake News Detection Model
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Chauhan-Ujjawal/Brainwave_Matrix_Intern/tree/master/CreditCardFraudDetection"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-[#662d91] no-underline transition-colors duration-200"
                    >
                      Credit Card Fraud Detection
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Chauhan-Ujjawal/CODSOFT/tree/master/codsoft_%F0%9D%92%95%F0%9D%92%82%F0%9D%92%94%F0%9D%92%8C%F0%9D%92%8F%F0%9D%92%90.4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-[#662d91] no-underline transition-colors duration-200"
                    >
                      Sales Prediction Model
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Chauhan-Ujjawal/CODSOFT/tree/master/codsoft_%F0%9D%92%95%F0%9D%92%82%F0%9D%92%94%F0%9D%92%8C%F0%9D%92%8F%F0%9D%92%902"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-[#662d91] no-underline transition-colors duration-200"
                    >
                      Movie Rating Prediction System
                    </a>
                  </li>
                </ol>
              </div>

              {/* Container 3 - Black */}
              <div className="nes-container is-dark with-title text-white">
                <p className="title">Landing Pages</p>
                <ol className="list-decimal list-inside text-sm pl-4 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#662d91] no-underline transition-colors duration-200"
                    >
                      Razor Pay Landing Page
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#662d91] no-underline transition-colors duration-200"
                    >
                      Discord Landing Page
                    </a>
                  </li>
                </ol>
              </div>

              {/* Container 4 - White */}
              <div className="nes-container with-title">
                <p className="title">UI/UX Projects</p>
                <ol className="list-decimal list-inside text-sm pl-4 space-y-1">
                  <li>
                    <a
                      href="https://www.behance.net/ujjawalchauhan06"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-[#662d91] no-underline transition-colors duration-200"
                    >
                      Go Grab
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
