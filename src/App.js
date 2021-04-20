import React from "react";

import Cards from "./components/Cards";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="bg-gray-100 h-screen p-5 w-full">
        <div className="grid grid-cols-4">
          <Cards />
        </div>
      </div>
    </>
  );
}

export default App;
