import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  console.log(formData);
  return (
    <div className="  pt-20">
      <div className="flex flex-col    m-6 rounded-md  pt-12 mx-16 my-16 lg:mx-16 lg:my-16 md:flex-row  justify-center items-center">
        <div className="w-full md:w-1/3">
          <div className="flex flex-col justify-center items-center ">
            <div className="self-center whitespace-nowrap my-10 px-4 pb-4  lg:px-6   lg:pb-6 text-sm sm:text-xl font-semibold dark:text-white">
              <div className="px-2 py-1 text-2xl  flex flex-row lg:text-6xl ">
                <Link
                  to="/"
                  className="font-extrabold text-lg  lg:text-2xl jiosaavan  font-serif"
                >
                  <h1>
                    <span className="font-semibold text-4xl  lg:text-8xl">
                      S
                    </span>
                    <span className="text-gray-400 text-3xl  lg:text-4xl">
                      Series
                    </span>
                  </h1>
                </Link>
              </div>
            </div>
            <h6 className="text-sm  lg:text-lg">
              This is a demo project. You can sign up with your email and
              password or with Google.
            </h6>
          </div>
        </div>
        <div className="w-full md:w-2/3 md:ml-8  ">
          <div className="max-w-md mx-auto">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username" />
              </div>
              <TextInput
                id="username"
                type="text"
                placeholder="Enter your username"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@flowbite.com"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-2 px-2 py-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit" className="w-full">
              SignUp
            </Button>

            <div className="mt-2">
              <p>
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
