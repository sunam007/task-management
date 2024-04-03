import React from 'react';
import { FaCheck, FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";

const Card = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded-lg">
            <div className="card-body">
                <input
                    className="w-full border-none outline-0 bg-transparent"
                    placeholder="title"
                    type="text"
                />
                <textarea
                    className="w-full border-none outline-0 bg-transparent"
                    placeholder="type here"
                    rows={5}
                />
                <div className="card-actions justify-between">
                    <button className="btn btn-sm btn-success">
                        status
                    </button>
                    <div className='space-x-1'>

                        <button className="btn btn-sm btn-primary">
                            <FaCheck />
                        </button>

                        <button className="btn btn-sm btn-warning">
                            <FaRegPenToSquare />
                        </button>

                        <button className="btn btn-sm btn-error">
                            <FaRegTrashCan />
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;