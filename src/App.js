import React from "react";

import Cards from "./components/Cards";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <div className="bg-gray-100 p-5 w-full">
        <h2 className="text-xl text-center mb-2">
          Select skill related to your query!
        </h2>
        <div className="grid grid-cols-4">
          <Cards />
        </div>
        <h2 className="text-lg text-center mt-4">
          skill related to your query missing? contact in
          t.me/pvx_community_group
        </h2>
      </div>
      <Footer />
    </>
  );
}

export default App;
