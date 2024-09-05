import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const Navber = () => {
    const {userInfo, logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
        .then(() =>{
            navigate('/')
        })
    }
    
    const items = <>
        <NavLink to='/'><button className="text-gray text-lg font-semibold hover:border-b-2 hover:border-orange">Home</button></NavLink>
        <NavLink to='/all-service'><button className="text-gray text-lg font-semibold hover:border-b-2 hover:border-orange">Services</button></NavLink>
        <NavLink to='/add-service'><button className="text-gray text-lg font-semibold hover:border-b-2 hover:border-orange">Dashboard</button></NavLink>
    </>
    return (
        <div className="home-container">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="butto" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {items}
                        </ul>
                    </div>
                    <a className=" text-4xl font-bold logo">po<span className="text-orange logo">kids</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        {items}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                {
                        userInfo ? <>
                            <button onClick={handleLogOut} className="px-4 py-2 rounded-full bg-white">Sign Out</button>
                            <h3>{userInfo.displayName}</h3>
                            <div className="w-10">
                                <img className="rounded-full"
                                    alt=""
                                    src={userInfo.photoURL} />
                            </div>
                        </>
                            :
                            <>
                                <Link to='/register'><button className="px-4 py-2 rounded-full bg-white">Resister</button></Link>
                                <Link to='/Sign-in'><button className="px-4 py-2 rounded-full bg-white">Sign In</button></Link>
                            </>
                    }


                
                </div>
            </div>
        </div>
    );
};

export default Navber;