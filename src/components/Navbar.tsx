"use client";

import { useEffect, useState } from "react";
import ILink from "@/models/ILink";

import HamburgerLink from "./HamburgerLink";
import NavbarLink from "./NavbarLink";

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import { KeyValuePair } from "tailwindcss/types/config";

const fullConfig = resolveConfig(tailwindConfig)
const MD_BREAKPOINT = parseInt((fullConfig?.theme?.screens as KeyValuePair<string, string>)['md']);

export default function Navbar({ links }: { links: ILink[] }) {
    const [hamburgerMenuIsClosed, setHamburgerMenuIsClosed] = useState(true);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= MD_BREAKPOINT) {
                setHamburgerMenuIsClosed(true);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    return (
        <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex flex-row items-center">
                    <img src="/portfolio.jpeg" className="h-12 w-12 mr-2 rounded-full" alt="Portfolio Photo"></img>
                    <div className="flex flex-col">
                        <span className="text-xl font-semibold whitespace-nowrap dark:text-white">Eric Hendrickson</span>
                        <span className="text font-semibold whitespace-nowrap dark:text-white">Software Engineer</span>
                    </div>
                </a>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {links.map(link => {
                            return (
                                <li key={`navbar-link-${link?.label}`}>
                                <NavbarLink label={link?.label} url={link?.url}></NavbarLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <button onClick={() => setHamburgerMenuIsClosed(!hamburgerMenuIsClosed)} data-collapse-toggle="navbar-hamburger" type="button" className="md:hidden inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className={`${hamburgerMenuIsClosed ? "hidden" : ""} w-full`} id="navbar-hamburger">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        {links.map(link => {
                            return (
                                <li key={`hamburger-link-${link?.label}`}>
                                    <HamburgerLink label={link?.label} url={link?.url}></HamburgerLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}