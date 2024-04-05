import Link from 'next/link';
import React from 'react';

const RegisterForm = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="firstName" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="lastName" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Email" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <input type="password" className="grow" placeholder="password" />
                </label>
                <div className="card-actions ">
                    <button className="btn btn-primary grow">Register</button>
                </div>
                <div className="card-actions ">
                    Already have an account ? Please <Link href={'/login'} className='text-blue-600'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;