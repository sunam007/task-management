import React, { useEffect, useState } from 'react';
import { FaCheck, FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";

const Card = (
    { title,
        taskId,
        description,
        status,
        onClickDelete,
        onClickEdit,
        onClickStatus,
        setTaskStatus
    }) => {

    const statusText = status ? "complete" : "incomplete"

    console.log("status in the card", status);

    useEffect(() => {
        setTaskStatus(status)
    }, [])

    const clickStatus = () => {
        if (status) {
            setTaskStatus(false)
        } else {
            setTaskStatus(true)
        }
        onClickStatus(taskId)
    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded-lg">
            <div className="card-body">
                <input
                    className="w-full border-none outline-0 bg-transparent"
                    placeholder="title"
                    type="text"
                    defaultValue={title}

                />
                <textarea
                    defaultValue={description}
                    className="w-full border-none outline-0 bg-transparent"
                    placeholder="type here"
                    rows={5}
                />
                <div className="card-actions justify-between">
                    <button
                        onClick={() => clickStatus()}
                        className={`btn btn-sm ${status ? "btn-success" : "btn-error"}`}
                    >
                        {statusText}
                    </button>
                    <div className='space-x-1'>

                        <button

                            className="btn btn-sm btn-primary">
                            <FaCheck />
                        </button>

                        <button onClick={onClickDelete} className="btn btn-sm btn-error">
                            <FaRegTrashCan />
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;