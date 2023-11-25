import React from "react";

const Container = ({ children }) => {
    return (
        <main className="container mx-auto px-4">
            <div className="flex justify-center w-full">{children}</div>
        </main>
    );
};

export default Container;
