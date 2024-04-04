"use client"
import React from 'react';
import Card from './Card';
import { FaCheck, FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { post } from '../api';


const TaskModal = () => {

    let taskSchema = object({
        title: string(),
        description: string()
    });

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, dirtyFields, isLoading },
    } = useForm({ resolver: yupResolver(taskSchema) });

    console.log("dirt >>", dirtyFields);

    const isDisabled = dirtyFields?.description || dirtyFields?.title;

    const taskCreateMutation = useMutation(
        async (data) => await post("/tasks", data),
        {
            onSuccess: (res) => {
                if (res.data) {
                    reset()
                }
                // const userInfo = encryptData(res.data);
                // if (userInfo) {
                //     setErrorMessage("");
                //     reset()
                // }
                // window.localStorage.setItem("LOCAL_STORAGE_KEY", userInfo);
                // window.localStorage.setItem("LOCAL_STORAGE_KEY_TOKEN", res?.token);

            },
            onError: (err) => {
                // if (err && err?.response?.data) {
                //     setErrorMessage(err?.response?.data?.message);
                // }
            },
        }
    );

    const onFormSubmit = (data: any) => {
        const email = window.localStorage.getItem("userEmail")

        if (email) {
            data["email"] = email
        }
        console.log("task data ", data);
        // taskCreateMutation.mutate(data);
    };

    return (
        <>
            <dialog id="my_modal_5" className="modal">
                <div className="modal-box block">
                    <div className="modal-action block">
                        <form
                            // onSubmit={handleSubmit(onFormSubmit)}
                            method="dialog"
                            noValidate
                        >
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                            <input
                                className="w-full border-none outline-0 bg-transparent"
                                placeholder="title"
                                type="text"
                                {...register("title")}
                            />
                            <textarea
                                className="w-full border-none outline-0 bg-transparent"
                                placeholder="type here"
                                {...register("description")}
                                rows={5}
                            />
                            <div className="card-actions justify-between">
                                <button disabled={isDisabled} className="btn btn-sm btn-success">
                                    status
                                </button>
                                <div className='space-x-1'>


                                    <button onClick={handleSubmit(onFormSubmit)} className="btn btn-sm btn-primary">
                                        <FaCheck />
                                    </button>

                                    <button disabled={isDisabled} className="btn btn-sm btn-warning">
                                        <FaRegPenToSquare />
                                    </button>

                                    <button disabled={isDisabled} className="btn btn-sm btn-error">
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