import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button";

export default function SignUp() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
    <div className="bg-light p-10 rounded-xl mt-2 ml-24">
      <form className="grid grid-cols-1">
        <h2 className="text-center pb-7">Sign up</h2>
  
        <label className="body small">Name</label>
        <input
          type="name"
          id="name"
          name="name"
          placeholder="Enter name"
          required
          className="w-full px-4 py-2 border-none rounded mb-4"
        />
  
        <label className="block body small">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          required
          className="w-full px-4 py-2 border-none rounded mb-4"
        />
  
        <label className="block body small">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          required
          className="w-full px-4 py-2 border-none rounded mb-4"
        />
  
        <label className="block body small">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter phone number"
          required
          className="w-full px-4 py-2 border-none rounded mb-4"
        />
  
        <label className="block body small">Date of Birth</label>
        <input
          type="date"
          id="dob"
          name="dob"
          required
          className="w-full px-4 py-2 border-none rounded mb-6"
        />
        <h3 className="text-center">
          <Button
            className="w-full mb-4"
            text="Sign up"
            fill
            href="/"
          />
        </h3>
        <p>Already have an account?<Link className="body bold ml-2" href="/auth/signin">Sign in</Link></p>
      </form>
    </div>
    <div className="flex items-center justify-center">
      <Link href="/">
        <Image
          src="/signin.svg"
          alt="Sign In Icon"
          width={500}
          height={500}
        />
      </Link>
    </div>
  </div>
  
  );
}
