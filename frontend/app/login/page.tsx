"use client"
import React from 'react';
import { useQuery, } from 'react-query';
import { get } from '../api';
import LoginForm from '../components/LoginForm';

const Login = () => {
    // const { isLoading, isError, error, data } = useQuery({
    // 	queryKey: ['homeData'],
    // 	queryFn: () => get('/tasks')
    // });

    // console.log("this is data >>"  , error);
    return (
        <section className='max-w-screen-lg mx-auto w-screen h-screen max-h-full flex justify-center items-center p-2'>
            <LoginForm />
        </section>
    );
};

export default Login;