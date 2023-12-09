import React, { useState } from "react";
import { authService } from "../../service/apiService";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const response = await authService.register(email, password);

      dispatch(setUser(response.data.token));

      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login failed", error.response.data);
      // Handle login failure
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Sign Up
        </h4>
        <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Enter your details to register.
        </p>
        <Form
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleFunction={handleRegister}
          type="signup"
        />
      </div>
    </div>
  );
};

export default SignUp;
