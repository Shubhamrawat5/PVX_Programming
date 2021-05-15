import React from "react";

import Cards from "./views/Cards/Cards";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-none">
        <Nav />
      </div>
      <div className="flex flex-col flex-1 bg-gray-100 p-5 w-full">
        <h2 className="flex flex-none text-xl justify-center items-center mb-2">
          Select skill related to your query!
        </h2>
        <div className="flex flex-1 w-full">
          <Cards />
        </div>
        <h2 className="flex flex-none text-lg justify-center items-center mt-4">
          skill related to your query missing? contact in
          t.me/pvx_community_group
        </h2>
      </div>
      <div className="flex flex-none">
        <Footer />
      </div>
    </ div>
  );
}

export default App;
