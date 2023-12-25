import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button";

export default function SignIn() {
  return (
    <div className="flex">
      <div>
        <form 
        className="bg-light 
        h-[419px] 
        w-[491px] 
        p-10 
        rounded-xl 
        mt-[80px]
        ml-[100px]">
        <h2 className="text-center
         pb-7">Sign In</h2>

          <label className="body small">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full  px-4 py-2 border-none rounded mb-4"
          />

          <label className="block body small">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-4 py-2 border-none rounded mb-10"
          />
          <h3 className="text-center"><Button  className="
          h-[56px] 
          w-[406px] 
          mb-[10px]" 
          text="Sign In"  fill href="/" /></h3>
          <p>Don't have an account? <Link className="body bold" href="/auth/signup">Sign up</Link></p>
        </form>
      </div>
      <div >
      <Link href="/">
            <Image
              className="border-none
              mt-[50px]"
              src="/signin.svg"
              alt="Sgn In Icon"
              width={500}
              height={500}
            />
          </Link>

      </div>
    </div>
  );
}
