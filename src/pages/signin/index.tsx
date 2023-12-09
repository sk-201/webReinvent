import React, { useState } from "react";
import { authService } from "../../service/apiService";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await authService.login(email, password);

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
          Sign In
        </h4>
        <Form
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleFunction={handleLogin}
          type="signin"
        />
      </div>
    </div>
  );
};

export default SignIn;
