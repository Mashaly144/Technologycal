import React from 'react';

const MainButton = ({ name, style }) => {
  return (
    <button
      className={`${style} px-10 py-5 w-fit rounded-3xl border border-neutral-200`}
    >
      {name}
    </button>
  );
};

export default MainButton;
