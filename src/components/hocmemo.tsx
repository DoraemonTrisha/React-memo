import React, { useState } from "react";
import Example from "./example";

const Memo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [decrease, setDecrease] = useState<number>(100);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setDecrease(decrease - 1);
  };
  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-4 text-blue-600">
          {count}
        </h1>
        <br />
        <Example value={decrease} />
        <div className="mt-4 flex justify-center gap-4">
          <button
            type="button"
            onClick={handleIncrease}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
          >
            Increment
          </button>
          <button
            type="button"
            onClick={handleDecrease}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};
export default Memo;
