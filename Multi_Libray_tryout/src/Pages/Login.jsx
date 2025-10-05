import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../Context/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSub = (data) => {
    console.log(data);

    dispatch(
      login({
        username: data.name,
        email: "test@email.com",
        access: "regular",
        token: "56wevft8w7e",
      })
    );
    reset({
      name,
      password,
    });
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen w-full gradient-bl-to-br">
      <div className="h-[500px] w-[400px] bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-2xl">
        <div>
          <h1>hello</h1>

          <form onSubmit={handleSubmit(onSub)}>
            <div>
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                id="name"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="text"
                placeholder="Enter your password"
                id="password"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 7,
                    message: "length need to be atleast 7",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 px-2 py-1 text-white rounded-2xl"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
