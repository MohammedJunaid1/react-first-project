import { Link } from "react-router-dom";
import { LabelledInput } from "../components/LabelledInput";

function Signup() {
  return (
    <>
      <div className=" back h-screen flex justify-center items-center">
        <h1 className="h1 flex-none text-8xl mr-20">WalkWise</h1>
<<<<<<< HEAD
        <div className=" container w-1/3 h-1/3 shadow-2xl">
          <form className="bg-opacity-10 bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4  ">
            <div className="mb-4">
              <label
                className="block text-red-500 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username or Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username or Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-red-500 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
=======
        <div className=" container w-1/3 h-1/3 shadow-2xl ">
          <form className=" bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4  rounded-2xl ">
            <h1 className=" text-center text-3xl font-semibold text-slate-700 mb-4">Create an Account</h1>
            <p className="text-center text-md text-slate-600">Already have an account?
              <Link className="underline" to={"/signin"}>Login</Link>
            </p>
            <div className="mb-4">
              <LabelledInput label={"Full Name"} placeholder={"Type your name..."} type={"text"} />
            </div>
            <div className="mb-4">
              <LabelledInput label={"Username or Email"} placeholder={"Username or Email"} type={"text"} />
            </div>
            <div className="mb-6">
              <LabelledInput label={"Set Password"} placeholder={"******************"} type="password" />
>>>>>>> d4d5d1c77a23f950f15e18ced41e9a65a305d2ed
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>

            </div>

          </form>

        </div>
      </div>
    </>
  );
}


export default Signup;
