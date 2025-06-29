"use client";

import { useState } from "react";
import "nes.css/css/nes.min.css";

const Header = () => {
  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    setShowDialog((prev) => !prev);
  };

  return (
    <header className="w-full relative">
      <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
        {/* Trophy Button */}
        <button
          type="button"
          className="nes-btn is-primary"
          onClick={toggleDialog}
        >
          <i className="nes-icon trophy is-small"></i>
        </button>
        

        {/* Dialog Box (conditionally rendered) */}
        {showDialog && (
          <div
            className="nes-dialog w-75 h-15 bg-white border border-gray-500 px-4 py-2"
            style={{ paddingTop: "0.25rem" }} // custom inline override
          >
            <p className="text-sm m-0 p-0 leading-tight">
              Follow me on{" "}
              <a
                href="https://instagram.com/_____.ujjwal.______"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="nes-icon instagram"></i>
              </a>
            </p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
