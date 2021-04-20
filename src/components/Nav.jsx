import dp from "../assets/images/dp.jpg";

function Nav() {
  return (
    <nav className="p-3 text-right bg-purple-900 text-white">
      <div className="font-center font-semibold text-4xl text-center">
        <img src={dp} alt="" className="w-16 rounded-full inline mr-5" />
        PVX PROGRAMMING
      </div>
      <div className="flex items-center justify-between flex-wrap w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-lg lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4"
          >
            About
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4"
          >
            Members
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-10"
          >
            Questions
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
