import React from 'react';
import { FaSquarePlus, FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";


const TaskAddButton = () => {
    return (
        <button className="btn btn-active btn-ghost w-64 h-64 flex justify-center items-center bg-transparent text-xl">

            <FaSquarePlus />
            Add Task
        </button>
    );
};

export default TaskAddButton;