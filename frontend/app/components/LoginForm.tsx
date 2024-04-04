import Link from 'next/link';
import React from 'react';

const LoginForm = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Email" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <input type="password" className="grow" placeholder="password" />
                </label>
                <div className="card-actions ">
                    <button className="btn btn-primary grow">Login</button>
                </div>
                <div className="card-actions ">
                    Dont have an account ? Please <Link href={'/register'} className='text-blue-600'>Register </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;