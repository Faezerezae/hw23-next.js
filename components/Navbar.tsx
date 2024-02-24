"use client"
import { Disclosure } from '@headlessui/react'
import Link from 'next/link';
import { SetStateAction, useState } from 'react';
import { HiMenu, HiOutlineX } from "react-icons/hi";
import Image from 'next/image';

export default function Navbar() {
    const [activeNavItem, setActiveNavItem] = useState('');

    const handleNavItemClick = (navItem: SetStateAction<string>) => {
        setActiveNavItem(navItem);
    };

    return (
        <Disclosure as="nav" className="">

            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">

                        <div className="flex justify-between h-16">
                            <div className="flex items-center">
                                <Image
                                    priority
                                    src="/Path-r.svg"
                                    height={200}
                                    width={200}
                                    alt="Path"
                                    className="absolute hidden sm:flex right-0 top-1"
                                />

                                <Image
                                    priority
                                    src="/Path-l.svg"
                                    height={200}
                                    width={200}
                                    alt="Path"
                                    className="hidden sm:flex absolute left-0 top-14"
                                />
                                <div className="flex-shrink-0 flex items-center">
                                    <Link href={"/"}>
                                        <img
                                            className="block lg:hidden h-10 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        />
                                    </Link>
                                    <Link href={"/"}>
                                        <img
                                            className="hidden lg:block h-10 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden md:ml-32 lg:ml-72 xl:ml-96 sm:flex sm:space-x-8">
                                    <ul>
                                        <li className={`nav-item ${activeNavItem === 'Product' ? 'border-indigo-500 text-gray-900 inline-flex items-center px-4 pt-1 border-b-2 text-base font-medium' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-4 pt-1 border-b-2 text-base font-medium'}`}>
                                            <button onClick={() => handleNavItemClick('Product')}><Link href={"/Product"}>Product</Link></button>
                                        </li>
                                        <li className={`nav-item ${activeNavItem === 'Features' ? 'border-indigo-500 text-gray-900 inline-flex items-center px-4 pt-1 border-b-2 text-base font-medium' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-4 pt-1 border-b-2 text-base font-medium'}`}>
                                            <button onClick={() => handleNavItemClick('Features')}><Link href={"/Features"}>Features</Link></button>
                                        </li>
                                        <li className={`nav-item ${activeNavItem === 'Marketplace' ? 'border-indigo-500 text-gray-900 inline-flex items-center px-4 pt-1 border-b-2 text-base font-medium' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-4 pt-1 border-b-2 text-base font-medium'}`}>
                                            <button onClick={() => handleNavItemClick('Marketplace')}><Link href={"/Marketplace"}>Marketplace</Link></button>
                                        </li>
                                        <li className={`nav-item ${activeNavItem === 'Company' ? 'border-indigo-500 text-gray-900 inline-flex items-center px-4 pt-1 border-b-2 text-base font-medium' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-4 pt-1 border-b-2 text-base font-medium'}`}>
                                            <button onClick={() => handleNavItemClick('Company')}><Link href={"/"}>Company</Link></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <HiOutlineX className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <HiMenu className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            <ul>
                                <li className={`nav-item ${activeNavItem === 'Product' ? 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'}`}>
                                    <button onClick={() => handleNavItemClick('Product')}><Link href={"/Product"}>Product</Link></button>
                                </li>
                                <li className={`nav-item ${activeNavItem === 'Features' ? 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'}`}>
                                    <button onClick={() => handleNavItemClick('Features')}><Link href={"/Features"}>Features</Link></button>
                                </li>
                                <li className={`nav-item ${activeNavItem === 'Marketplace' ? 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'}`}>
                                    <button onClick={() => handleNavItemClick('Marketplace')}><Link href={"/Marketplace"}>Marketplace</Link></button>
                                </li>
                                <li className={`nav-item ${activeNavItem === 'Company' ? 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'}`}>
                                    <button onClick={() => handleNavItemClick('Company')}><Link href={"/"}>Company</Link></button>
                                </li>
                            </ul>
                        </div>

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
