import Link from "next/link";
import React from "react";
import { FiCoffee } from "react-icons/fi";

const NavBar = () => {
  return (
    <nav className="flex space-x-6 border b mb-5 px-5 h-14 items-center ">
      <Link href="/">
        <FiCoffee />
      </Link>
      <ul className="flex space-x-6">
        <li className="text-zinc-500  hover:text-zinc-800">
          <Link href="/">Dashboard</Link>
        </li>
        <li className="text-zinc-500  hover:text-zinc-800 transition-colors">
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
