import React from "react";
import classnames from "classnames";
import Button from "./Button/Button";

// TODO - Update this component to get title, description etc from props.
function Card(props) {
  const { skillName, logo } = props.data;
  return (
    <div
      className={classnames(
        "rounded-lg bg-white shadow-lg py-4 px-8 flex flex-col space-y-3 justify-center m-1 cursor-pointer",
        "transition duration-500 ease-in-out transform hover:scale-105"
      )}
    >
      <div className="text-center text-3xl font-semibold">{skillName}</div>
      <div>
        <img className="w-20 m-auto" src={logo} alt="logo" />
      </div>
      <div className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde porro
        illo corporis, qui sunt reprehenderit perspiciatis dolor fuga soluta
        recusandae blanditiis in a consectetur commodi!
      </div>
      <Button>Know more</Button>
    </div>
  );
}

export default Card;
