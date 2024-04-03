import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-4 text-white'>
            <div className="text-xl px-2">
                ToDo App
            </div>

            <div className='px-2'>
                <button className="btn btn-outline btn-success">Login/Register</button>
            </div>
        </div>
    );
};

export default Navbar;