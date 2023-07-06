import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export default function Nav() {
  const { user, logOut } = useContext(AuthContext);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <header className="p-4 bg-violet-950 text-gray-100 ">
      <div className="container flex justify-between h-16 mx-auto ">
        <div className="flex">
          <div className="flex my-auto mx-auto ">
            <Link
              to={"/"}
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-8 h-8 dark:text-violet-400"
              >
                <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
              </svg>
            </Link>
            <p className="text-center mr-10 my-3 gap-5">TOY CARS ZONE</p>
          </div>
          <ul className=" hidden space-x-3 lg:flex gap-5 items-center">
            <li className="flex" onClick={() => setActive("home")}>
              <Link
                to={"/"}
                className={`flex items-center px-2 mb-1 ${
                  active == "home" &&
                  "border-b-2 text-violet-400 border-violet-400"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="flex" onClick={() => setActive("toy")}>
              <Link
                to={"toy"}
                className={`flex items-center px-2 mb-1 ${
                  active == "toy" &&
                  "border-b-2 text-violet-400 border-violet-400"
                }`}
              >
                All Toys
              </Link>
            </li>
            <li className="flex" onClick={() => setActive("mytoy")}>
              <Link
                to={"/mytoy"}
                className={`flex items-center px-2 mb-1 ${
                  active == "mytoy" &&
                  "border-b-2 text-violet-400 border-violet-400"
                }`}
              >
                My Toys
              </Link>
            </li>

            <li className="flex" onClick={() => setActive("addtoy")}>
              <Link
                to={"/addtoy"}
                className={`flex items-center px-2 mb-1 ${
                  active == "addtoy" &&
                  "border-b-2 text-violet-400 border-violet-400"
                }`}
              >
                Add A Toy
              </Link>
            </li>

            <li className="flex" onClick={() => setActive("blog")}>
              <Link
                to={"/blog"}
                className={`flex items-center px-2 mb-1 ${
                  active == "blog" &&
                  "border-b-2 text-violet-400 border-violet-400"
                }`}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {user?.email && (
            <div
              className=" tooltip tooltip-left"
              data-tooltip-id="toolTip1"
              data-place="top"
              data-tooltip-content={
                user?.displayName ? user?.displayName : user?.email
              }
            >
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full mr-4 ">
                  <img
                    alt=""
                    className="w-10 mr-5 h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                    src="https://source.unsplash.com/40x40/?portrait?1"
                  />
                </div>

                <Tooltip id="toolTip1" />
              </label>
            </div>
          )}
          {!user?.email && (
            <Link to={"/login"}>
              <button className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900 gap-2">
                Log in
              </button>
            </Link>
          )}

          {user?.email && (
            <button
              onClick={() => logOut()}
              className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900 gap-2"
            >
              Log Out
            </button>
          )}
        </div>
        {!toggle && (
          <button className="p-4 lg:hidden" onClick={() => setToggle(!toggle)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        )}
        {toggle && (
          <button className="p-4 lg:hidden" onClick={() => setToggle(!toggle)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        {/* mobile navbar  */}
        {toggle && (
          <div className="lg:hidden absolute bg-white text-violet-700 right-4 top-16 p-2">
            <ul className="  space-x-3 flex-col gap-5 items-center">
              <li className="flex" onClick={() => setActive("home")}>
                <Link
                  to={"/"}
                  className={`flex items-center px-2 mb-1 ml-3 ${
                    active == "home" &&
                    "border-b-2 text-violet-400 border-violet-400"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="flex" onClick={() => setActive("toy")}>
                <Link
                  to={"toy"}
                  className={`flex items-center px-2 mb-1 ${
                    active == "toy" &&
                    "border-b-2 text-violet-400 border-violet-400"
                  }`}
                >
                  All Toys
                </Link>
              </li>
              <li className="flex" onClick={() => setActive("mytoy")}>
                <Link
                  to={"/mytoy"}
                  className={`flex items-center px-2 mb-1 ${
                    active == "mytoy" &&
                    "border-b-2 text-violet-400 border-violet-400"
                  }`}
                >
                  My Toys
                </Link>
              </li>

              <li className="flex" onClick={() => setActive("addtoy")}>
                <Link
                  to={"/addtoy"}
                  className={`flex items-center px-2 mb-1 ${
                    active == "addtoy" &&
                    "border-b-2 text-violet-400 border-violet-400"
                  }`}
                >
                  Add A Toy
                </Link>
              </li>

              <li className="flex" onClick={() => setActive("blog")}>
                <Link
                  to={"/blog"}
                  className={`flex items-center px-2 mb-1 ${
                    active == "blog" &&
                    "border-b-2 text-violet-400 border-violet-400"
                  }`}
                >
                  Blogs
                </Link>
              </li>
            </ul>

            <div className="items-center flex-shrink-0  flex-col space-y-4 my-3 justify-center">
              {user?.email && (
                <div
                  className=" tooltip tooltip-left"
                  data-tooltip-id="toolTip1"
                  data-place="top"
                  data-tooltip-content={
                    user?.displayName ? user?.displayName : user?.email
                  }
                >
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full mr-4 ">
                      <img
                        alt=""
                        className="w-10 mr-5 h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                        src="https://source.unsplash.com/40x40/?portrait?1"
                      />
                    </div>

                    <Tooltip id="toolTip1" />
                  </label>
                </div>
              )}
              {!user?.email && (
                <Link to={"/login"}>
                  <button className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900 gap-2">
                    Log in
                  </button>
                </Link>
              )}

              {user?.email && (
                <button
                  onClick={() => logOut()}
                  className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900 gap-2"
                >
                  Log Out
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
