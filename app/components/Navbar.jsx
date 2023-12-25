"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center h-[60px]">
      <Link href="/">
        <h3>ArtArray</h3>
      </Link>

      <div className="flex gap-5 text-gray-light justify-between items-center">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/">
          <p>About</p>
        </Link>
        <Link href="/">
          <p>Contact</p>
        </Link>
      </div>

      {pathname !== "/auth/signin" && pathname !== "/auth/signup" ? (
        <div className="flex gap-5 justify-between items-center">
          <Link href="/">
            <Image
              className="text-gray"
              src="/cart.svg"
              alt="Cart Icon"
              width={30}
              height={30}
            />
          </Link>

          <Button text="Login" outline href="/auth/signin" />
        </div>
      ) : (
        <div className="w-[159px]"></div>
      )}
    </nav>
  );
}
