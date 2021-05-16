import React from 'react';

function Button(props) {
  const {
    children,
    onClick,
  } = props;
  
  return (
    <button
      className="px-9 py-3 text-purple-600 border-b border-purple-500 bg-purple-200 hover:bg-purple-300 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
