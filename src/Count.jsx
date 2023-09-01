import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter flex flex-col gap-4 justify-center items-center w-[100vw] h-[100vh]">
      <p>{count}</p>
      <div className="btn_wrapper flex gap-2">
        <button className="p-4 border border-black rounded-md" type="button" onClick={() => setCount(count + 1)}>
          Inc
        </button>
        <button className="p-4 border border-black rounded-md" type="button" onClick={() => setCount(count - 1)}>
          Dec
        </button>
      </div>
    </div>
  );
};

export default Count;
