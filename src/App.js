import React from "react";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Routes from "./Routes";

function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-none">
        <Nav />
      </div>
      <div className="flex flex-col flex-1 bg-gray-100 p-5 w-full">
        <div className="flex flex-1 w-full">
          <Routes />
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
