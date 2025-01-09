import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className=" bg-transparent">
      <div className=" flex flex-row items-center justify-between mx-8 py-4">
        <Link href="/">
          <h1 className=" font-mono  text-3xl font-semibold">GitMate❤️</h1>
        </Link>
        <div>
          <Link href="/login">
            <button className=" bg-white h-8 text-black px-4 rounded-full">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
