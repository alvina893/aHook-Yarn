import React from "react";
import { InputBox } from "./InputBox";
import { Link } from "react-router-dom";
import { AnimationWrapper } from "../../common/PageAnimation";

export const UserAuthForm = ({ type }) => {
  return (
    <section className="h-cover flex-col bg-secondary">
      <AnimationWrapper keyValue={type}>
        <h1 className="text-4xl font-gelasio capitalize text-center pb-5">
          {type == "Sign-In"
            ? "Welcome back! 😊"
            : "Hello! It's Nice to Meet You! 🥰"}
        </h1>
        <div className="items-center justify-center flex">
          <div className="form-authentication w-[80%] max-w-[550px]">
            <form className="items-center justify-center">
              {type != "Sign-In" ? (
                <InputBox
                  title="Username"
                  name="username"
                  type="text"
                  placeholder="Enter your username here..."
                />
              ) : (
                " "
              )}
              <InputBox
                title="Email"
                name="email"
                type="email"
                placeholder="Enter your email here..."
              />

              <InputBox
                title="Password"
                name="password"
                type="password"
                placeholder="Enter your password here..."
              />
              <button className="btn-light center mb-4 mt-8 w-full">
                {type.replace("-", " ")}
              </button>
              <div className="relative w-full flex items-center my-5 opacity-15 uppercase text-secondary font-bold">
                <hr className="w-1/2 border-secondary" />
                <p>or</p>
                <hr className="w-1/2 border-secondary" />
              </div>
              <button className="btn-light w-full">
                <img
                  src="/img/google.png"
                  className="flex items-center justify-center gap-3 w-[5%] center"
                />
                Continue with Google
              </button>

              {type == "Sign-In" ? (
                <p className="mt-6 text-secondary text-l text-center">
                  Don't have an account?
                  <Link
                    to="/signup"
                    className="underline text-amber-300 text-l ml-1"
                  >
                    Join us today!
                  </Link>
                </p>
              ) : (
                <p className="mt-6 text-secondary text-l text-center">
                  Already a member?
                  <Link
                    to="/signin"
                    className="underline text-amber-300 text-l ml-1"
                  >
                    Sign in here!
                  </Link>
                </p>
              )}
            </form>
          </div>
        </div>
      </AnimationWrapper>
    </section>
  );
};
