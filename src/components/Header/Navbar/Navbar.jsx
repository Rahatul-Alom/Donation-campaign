import { NavLink } from "react-router-dom";
const Navbar = () => {
    const links = 
        <nav className="flex flex-col md:flex-row gap-9">
            <li><NavLink to={"/"} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
            }>Home</NavLink></li>
            <li><NavLink to={"/donation"} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
            }>Donation</NavLink></li>
            <li><NavLink to={"/statistics"} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
            }>Statistics</NavLink></li>
        </nav>
    
    return (
         <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {links}
                </ul>
                </div>
                <img src="https://i.ibb.co/KKGfRbK/Logo.png"></img>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu-horizontal px-1">
                     {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;