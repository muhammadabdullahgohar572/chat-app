"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}

            <Link href="/">
              <h1 className="text-xl font-bold cursor-pointer">
                Abdullah Chat App
              </h1>
            </Link>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isSidebarOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Links for larger screens */}
            <div className="hidden md:flex space-x-4">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Home
              </Link>
              <Link
                href="/forums"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Forums
              </Link>
              <Link
                href="/chat"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                User-chat
              </Link>
              <UserButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-2000 ease-in-out`}
      >
        <div className="justify-center p-4">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            href="/forums"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Forums
          </Link>
          <Link
            href="/chat"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            User-chat
          </Link>
          <div className="mt-4 ml-[3%]">
            <UserButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
