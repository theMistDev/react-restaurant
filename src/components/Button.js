import React from 'react';

function Button(props) {
  return (
    <button
      onClick={() => {
        window.location.href = props.href;
      }}
      className="bg-red-800 p-3 text-3xl hover:bg-red-600 text-white"
    >
      {props.title}
    </button>
  );
}

export default Button;
