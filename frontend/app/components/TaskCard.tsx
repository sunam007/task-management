import React from "react";

const TaskCard = () => {
  return (
    <div className="join join-vertical w-64 border-2 border-dashed rounded-sm">
      <input
        className="w-full h-12 border-none outline-0 bg-transparent placeholder:text-center p-2"
        placeholder="title"
        type="text"
      />
      <div className="divider"></div>
      <textarea
        className="w-full h-48 border-none outline-0 bg-transparent placeholder:text-center p-2"
        placeholder="type here"
        rows={10}
      />
    </div>
  );
};

export default TaskCard;
