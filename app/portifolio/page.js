"use client";
import React from 'react';
import { useUserAuth } from './_utils/auth-context';
import { FaGithub, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
function LandingPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async () => {
        await gitHubSignIn();
    };

    const handleLogout = async () => {
        await firebaseSignOut();
    };

    if (user) {
        return (
            <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 to-blue-300">
                <div className="text-center bg-black p-8 rounded-lg shadow-xl max-w-sm">
                    <p className="mb-4 text-lg text-white">Authorization Successful! <span className="font-semibold">{user.displayName}</span> ({user.email})</p>
                    <button onClick={firebaseSignOut} className="w-full bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                        Logout
                    </button>
                    <div className="mt-4">
                        <a href="/portifolio/Homepage" className="text-blue-500 hover:text-red-500 transition duration-300 ease-in-out">
                            Go to portfolio
                        </a>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 to-blue-300">
                <div className="text-center bg-black p-8 rounded-lg shadow-xl max-w-sm">
                    <h1 className="text-white text-xl mb-4">You need to authenticate yourself with GitHub</h1>
                    <button onClick={handleLogin} className="w-full bg-gradient-to-r from-blue-500 to-teal-400 hover:from-teal-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-500 ease-in-out flex items-center justify-center">
                        <FaGithub className="mr-2"/> Login with GitHub
                    </button>
                </div>
            </div>
        );
    }
}


export default LandingPage;