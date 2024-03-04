import { Link } from "react-router-dom";
import { LabelledInput } from "../components/LabelledInput";

function Signup() {
  return (
    <>
      <div className=" back h-screen flex justify-center items-center">
        <h1 className="h1 flex-none text-8xl mr-20">WalkWise</h1>
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
