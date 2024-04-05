"use client"
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { object, string } from 'yup';

import { post } from '../api';
import { encryptData } from '../(utils)/encrypt';
import CustomError from '../(components)/CustomError';
import CustomInput from '../(components)/CustomInput';
import { LOCAL_STORAGE_KEY, LOCAL_STORAGE_KEY_TOKEN } from '../(config)/config';

const Register = () => {

    const [errorMessage, setErrorMessage] = useState("")

    let userSchema = object({
        firstName: string().required("First name is required"),
        lastName: string().required("Last name is required"),
        email: string().email().required("Email is required"),
        password: string().required("Password is required"),
    });

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(userSchema) });

    const registerMutation = useMutation(
        async (data) => await post("/users/register", data),
        {
            onSuccess: (res) => {
                const userInfo = encryptData(res.data);
                if (userInfo) {
                    setErrorMessage("");
                    reset()
                }
                if (typeof window !== "undefined") {

                    window.localStorage.setItem(LOCAL_STORAGE_KEY, userInfo);
                    window.localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN, res?.token);
                }

            },
            onError: (err) => {
                if (err && err?.response?.data) {
                    setErrorMessage(err?.response?.data?.message);
                }
            },
        }
    );

    const onFormSubmit = (data: any) => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem("userEmail", data?.email)
        }
        registerMutation.mutate(data);
    };

    return (
        <section className='max-w-screen-lg mx-auto w-screen h-screen max-h-full flex justify-center items-center p-2'>
            <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
                <div className="card w-96 bg-base-100 shadow-xl">

                    <div className="card-body">
                        {
                            errorMessage && <CustomError errorMessage={errorMessage} />
                        }
                        <CustomInput
                            name={"firstName"}
                            placeholder={"First Name"}
                            register={register}
                            errors={errors}
                            isRequired={true}
                        />

                        <CustomInput
                            name={"lastName"}
                            placeholder={"Last Name"}
                            register={register}
                            errors={errors}
                            isRequired={true}
                        />

                        <CustomInput
                            name={"email"}
                            placeholder={"Email"}
                            register={register}
                            errors={errors}
                            isRequired={true}
                        />
                        <CustomInput
                            name={"password"}
                            type={"password"}
                            placeholder={"Password"}
                            register={register}
                            errors={errors}
                            isRequired={true}
                        />
                        <div className="card-actions ">
                            <button
                                className="btn btn-primary grow"
                                disabled={registerMutation?.isLoading}
                            >
                                {
                                    registerMutation?.isLoading ? "Loading" : "Register"
                                }

                            </button>
                        </div>
                        <div className="card-actions ">
                            Dont have an account ? Please <Link href={'/login'} className='text-blue-600'>Login </Link>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Register;