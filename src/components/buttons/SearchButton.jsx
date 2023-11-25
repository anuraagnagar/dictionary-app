import React from "react";

const SearchButton = () => {
    return (
        <button
            type="submit"
            className="text-white absolute end-2.5 bottom-3 rounded-lg text-sm p-2">
            <svg
                className="w-4 h-4 md:h-5 md:w-5 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
            </svg>
        </button>
    );
};

export default SearchButton;
