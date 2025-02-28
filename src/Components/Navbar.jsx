
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const handleClick = () => {
    alert("Sorry! my resume are not ready");
  };
  const navLinks =<>
  <li><Link smooth className="btn btn-ghost" to={'/#aboutMe'}>AboutMe</Link></li>
  <li><Link smooth className="btn btn-ghost"  to={'/#skill'}>Skill</Link></li>
  <li><Link smooth className="btn btn-ghost"  to={'/#projects'}>Projects</Link></li>
  <li><Link smooth className="btn btn-ghost"  to={'/#contact'}>Contact</Link></li>
  </>
  return (
    <div className="navbar bg-cyan-600 shadow-md fixed top-0 w-full z-10">
          <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             {navLinks}
            </ul>
          </div>
          <h1 className="text-xl font-bold">Md Arman</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-16">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <button onClick={handleClick} className="btn bg-blue-950 w-44 text-ml text-amber-50">Resume </button>
        </div>
    </div>
  );
};

export default Navbar;