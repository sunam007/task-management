import React from 'react';
import Card from './Card';
import { FaCheck, FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";


const TaskModal = () => {
    return (
        <>
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal">
                <div className="modal-box block">
                    <div className="modal-action block">
                        <form method="dialog">
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
                            {/* if there is a button in form, it will close the modal */}
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default TaskModal;