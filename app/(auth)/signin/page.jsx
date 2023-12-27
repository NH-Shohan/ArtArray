"use client";

import Button from "@/app/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    if (email === "shohan@gmail.com" && password === "123456") {
      router.replace("/user");
    } else if (email === "shohan@admin.com" && password === "123456") {
      router.replace("/admin");
    } else {
      console.log("Invalid email or password");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-24 items-center h-screen">
      <form className="bg-light p-10 rounded-xl h-fit">
        <h2 className="text-center text-black">Sign in</h2>

        <label className="text-gray-light small">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          required
          className="w-full px-4 py-3 rounded-lg mb-4 outline-none border border-gray-light"
          onChange={handleChangeEmail}
        />

        <label className="text-gray-light small">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          required
          className="w-full px-4 py-3 rounded-lg mb-4 outline-none border border-gray-light"
          onChange={handleChangePassword}
        />

        <h3>
          <Button
            className="w-full mb-2 mt-6"
            text="Sign in"
            fill
            onClick={handleSubmit}
          />
        </h3>

        <p>
          Already have an account?
          <Link className="bold ml-1" href="/signup">
            Sign up
          </Link>
        </p>
      </form>

      <Image
        src="/signin.svg"
        alt="Sign In Icon"
        priority
        width={500}
        height={400}
      />
    </div>
  );
}
