import React from "react";

const SortButton = ({ handleSortAscend, handleSortDescend }) => {
  return (
    <div>
      <div>
        <span>並び替え：</span>
        <button onClick={() => handleSortAscend()}>古い順</button>
        <button onClick={() => handleSortDescend()}>新しい順</button>
      </div>
    </div>
  );
};

export default SortButton;
