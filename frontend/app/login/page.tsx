"use client"
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { object, string } from 'yup';
import { post } from '../api';
import CustomError from '../components/CustomError';
import CustomInput from '../components/CustomInput';
import { encryptData } from '../utils/encrypt';
import { LOCAL_STORAGE_KEY, LOCAL_STORAGE_KEY_TOKEN } from '../config/config';
import { useRouter } from 'next/navigation';
import { isLoggedIn } from '../utils/retrieveUser';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("")

    const router = useRouter()

    const _isLoggedIn = isLoggedIn()

    if(_isLoggedIn){
        router?.push("/")
    }

    let userSchema = object({
        email: string().email().required("Email is required"),
        password: string().required("Password is required"),
    });

    const {
        control,
        reset,
        resetField,
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm({ resolver: yupResolver(userSchema) });

    const loginMutation = useMutation(
        async (data) => await post("/users/login", data),
        {
            onSuccess: (res) => {
                const userInfo = encryptData(res?.data);
                if (userInfo) {
                    setErrorMessage("");
                    reset()
                }
                window.localStorage.setItem(LOCAL_STORAGE_KEY, userInfo);
                window.localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN, res?.token);

                router.push("/")


            },
            onError: (err) => {
                if (err && err?.response?.data) {
                    setErrorMessage(err?.response?.data?.message);
                }
            },
        }
    );

    const onFormSubmit = (data: any) => {
        window.localStorage.setItem("userEmail", data?.email)
        console.log("ls key >" , LOCAL_STORAGE_KEY_TOKEN);
        loginMutation.mutate(data);
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
                                disabled={loginMutation?.isLoading}
                            >
                                {
                                    loginMutation?.isLoading ? "Loading" : "Login"
                                }

                            </button>
                        </div>
                        <div className="card-actions ">
                            Dont have an account ? Please <Link href={'/register'} className='text-blue-600'>Register </Link>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Login;