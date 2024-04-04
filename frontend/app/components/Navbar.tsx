import Link from 'next/link';
import React from 'react';
import { clearLocalStorage, isLoggedIn, logOut, retrieveUser } from '../utils/retrieveUser';

const Navbar = () => {

    const _isLoggedIn = isLoggedIn()

    const user = retrieveUser();

    return (
        <div className={`flex ${_isLoggedIn ? "justify-between" : "justify-end"}  items-center py-4 text-white`}>
            {
                _isLoggedIn
                &&
                <div className="text-xl px-2">
                    {user?.firstName}
                </div>
            }

            <div className='px-2'>
                {
                    _isLoggedIn
                        ?
                        <button
                        className="btn btn-outline btn-error"
                        onClick={() => logOut()}
                        >Logout
                        </button>
                        :
                        <Link
                            href={"/login"}
                            className="btn btn-outline btn-success"
                        >
                            Login/Register
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;