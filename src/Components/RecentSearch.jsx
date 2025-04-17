import React from "react";

const RecentSearch = ({
  recentHistory,
  setRecentHistory,
  handleHistoryClicked,
}) => {
  const handleClearHistory = () => {
    localStorage.clear();
    setRecentHistory([]);
  };
  return (
    <>
      <div className="col-span-1 bg-zinc-800 h-screen text-white p-4">
        <h1 className="text-2xl font-bold mb-4 text-zinc-400 flex text-centre justify-center">
          <span> Recent History </span>
          <button className="cursor-pointer" onClick={handleClearHistory}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </button>
        </h1>
        <ol className="list-decimal list-inside space-y-1 cursor-pointer  ">
          {recentHistory.map((item, index) => (
            <li
              key={index}
              onClick={() => handleHistoryClicked(item)}
              className="hover:text-zinc-200 hover:bg-zinc-700"
            >
              {item}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default RecentSearch;
