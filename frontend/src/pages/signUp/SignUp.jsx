import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {loading,signup}=useSignup()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    await signup(inputs);
  }

  const onCheckboxChange = (gender)=>{
    setInputs({...inputs,gender});
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-green-300">TalkLET</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="w-full input input-bordered h-10" value={inputs.fullName} onChange={(e)=> setInputs({...inputs,fullName:e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.username} onChange={(e)=> setInputs({...inputs,username:e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={inputs.password} onChange={(e)=> setInputs({...inputs,password:e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full input input-bordered h-10 "
              value={inputs.confirmPassword} onChange={(e)=> setInputs({...inputs,confirmPassword:e.target.value})}
            />
          </div>

          <GenderCheckbox onCheckboxChange={onCheckboxChange} selectedGender = {inputs.gender} />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-900 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700" disabled={loading}>
              {loading?<span className="loading loading-spinner"></span>:"Sign Up"}
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
