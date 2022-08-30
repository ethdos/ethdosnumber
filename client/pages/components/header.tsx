import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import Link from "next/link";

const Header = (props: { isConnected: boolean }) => (
  <header>
    <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <Link href="/">
            <div className="block text-black hover:text-gray-500/75 mt-5 hover:cursor-pointer">
              <span className="sr-only">Home</span>
              <svg
                width="48"
                strokeWidth="1.5"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.40434 13.6099C3.51517 13.1448 3 12.5924 3 12C3 10.3431 7.02944 9 12 9C16.9706 9 21 10.3431 21 12C21 12.7144 20.2508 13.3705 19 13.8858"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11.01L12.01 10.9989"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.8827 6C16.878 4.97702 16.6199 4.25309 16.0856 3.98084C14.6093 3.22864 11.5832 6.20912 9.32664 10.6379C7.07005 15.0667 6.43747 19.2668 7.91374 20.019C8.44117 20.2877 9.16642 20.08 9.98372 19.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.60092 4.25164C8.94056 3.86579 8.35719 3.75489 7.91369 3.98086C6.43742 4.73306 7.06999 8.93309 9.32658 13.3619C11.5832 17.7907 14.6092 20.7712 16.0855 20.019C17.3977 19.3504 17.0438 15.9577 15.3641 12.1016"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>

        <div className="md:flex md:items-center md:gap-12 mt-5">
          <nav aria-labelledby="header-navigation">
            <ul className="flex items-center gap-10 text-sm">
              {props.isConnected && (
                <li>
                  <ConnectButton />
                </li>
              )}
              <li>
                <Link href="/">
                  <span className="text-black transition hover:text-gray-500/75 mt-5 hover:cursor-pointer">
                    CODE
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span className="text-black transition hover:text-gray-500/75 mt-5 hover:cursor-pointer">
                    ABOUT
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
