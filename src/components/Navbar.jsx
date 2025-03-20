import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            await signOut(auth);
            navigate("/");
        }
    };


    return (
        <nav className="bg-blue-600 text-white py-3 px-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">GameApp</h1>
            <ul className="flex space-x-6">
                <li>
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/game" className="hover:underline">
                        Play Game
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="hover:underline">
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to="/leaderboard" className="hover:underline">
                        Leaderboard
                    </Link>
                </li>
                <li>
                    <button onClick={handleLogout} className="hover:underline">
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
