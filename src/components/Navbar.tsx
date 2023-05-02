'use client';

import { useEffect, useState } from 'react';

import HamburgerLink from './HamburgerLink';
import NavbarLink from './NavbarLink';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind/config';
import { KeyValuePair } from 'tailwindcss/types/config';
import { ILink } from '@/models/ILink';

const fullConfig = resolveConfig(tailwindConfig);
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
        };
    });

    return (
        <nav className="sticky left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
            <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
                <a href="#" className="flex flex-row items-center">
                    <img src="/portfolio.jpeg" className="mr-2 h-12 w-12 rounded-full" alt="Portfolio Photo"></img>
                    <div className="flex flex-col">
                        <span className="whitespace-nowrap text-xl font-semibold dark:text-white">
                            Eric Hendrickson
                        </span>
                        <span className="whitespace-nowrap font-semibold dark:text-white">
                            Full Stack Software Engineer
                        </span>
                    </div>
                </a>
                <div
                    className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
                    id="navbar-sticky"
                >
                    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                        {links.map((link) => {
                            return (
                                <li key={`navbar-link-${link?.label}`}>
                                    <NavbarLink label={link?.label} url={link?.url}></NavbarLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <button
                    onClick={() => setHamburgerMenuIsClosed(!hamburgerMenuIsClosed)}
                    data-collapse-toggle="navbar-hamburger"
                    type="button"
                    className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                    aria-controls="navbar-hamburger"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="h-6 w-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div className={`${hamburgerMenuIsClosed ? 'hidden' : ''} w-full`} id="navbar-hamburger">
                    <ul className="mt-4 flex flex-col rounded-lg bg-gray-50 font-medium dark:border-gray-700 dark:bg-gray-800">
                        {links.map((link) => {
                            return (
                                <li key={`hamburger-link-${link?.label}`}>
                                    <HamburgerLink label={link?.label} url={link?.url}></HamburgerLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
