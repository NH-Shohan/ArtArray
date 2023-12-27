"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/dashboard" ||
      pathname !== "/arts" ||
      pathname !== "/users" ? (
        <nav className="flex justify-between items-center h-[60px]">
          <Link href="/user">
            <h3>ArtArray</h3>
          </Link>

          <div className="flex gap-5 text-gray-light justify-between items-center">
            <Link
              href="/user"
              className={`hover:text-black transition-all ${
                pathname == "/user" ? "text-black font-bold" : ""
              }`}
            >
              <p>Home</p>
            </Link>
            <Link
              href="/user/about"
              className={`hover:text-black transition-all ${
                pathname == "/user/about" ? "text-black font-bold" : ""
              }`}
            >
              <p>About</p>
            </Link>
            <Link
              href="/user/contact"
              className={`hover:text-black transition-all ${
                pathname == "/user/contact" ? "text-black font-bold" : ""
              }`}
            >
              <p>Contact</p>
            </Link>
          </div>

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

            <Button text="Login" outline href="/signin" />
          </div>
        </nav>
      ) : null}
    </>
  );
}
