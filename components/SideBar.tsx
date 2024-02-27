"use client"

import { classNames } from '@/utils/tools'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { HiMenu, HiOutlineX } from 'react-icons/hi'
import { LuUsers2 } from "react-icons/lu";
import { IoFolderOpenOutline ,IoLogOutOutline } from "react-icons/io5";


export default function SideBar() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [currentNavItem, setCurrentNavItem] = useState('Dashboard');

    const navigation = [
        { name: 'User Management', href: '/admin', icon: LuUsers2 , current: currentNavItem === 'Dashboard' },
        { name: 'Companies', href: '/admin/companies', icon: IoFolderOpenOutline, current: currentNavItem === 'Team' },
        { name: 'Logout', href: '/', icon: IoLogOutOutline , current: currentNavItem === 'Projects' },
    ];

    const handleNavItemClick = (itemName: string) => {
        setCurrentNavItem(itemName);
        setSidebarOpen(false);
    };

    return (
        <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-primary-900">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Open sidebar</span>
                                        <HiOutlineX className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 flex items-center px-4">
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                <nav className="px-2 space-y-1">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                                                'group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer'
                                            )}
                                            onClick={() => handleNavItemClick(item.name)}
                                        >
                                            <item.icon
                                                className={classNames(
                                                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                    'mr-3 flex-shrink-0 h-6 w-6'
                                                )}
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                    </div>
                </Dialog>
            </Transition.Root>
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div className="flex flex-col flex-grow pt-5 bg-primary-900 overflow-y-auto">
                    <div className="flex items-center flex-shrink-0 px-4">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                            alt="Workflow"
                        />
                    </div>
                    <div className="mt-5 flex-1 flex flex-col">
                        <nav className="flex-1 px-2 pb-4 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                    )}
                                    onClick={() => handleNavItemClick(item.name)}
                                >
                                    <item.icon
                                        className={classNames(
                                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                            'mr-3 flex-shrink-0 h-6 w-6'
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            <div className="sticky top-0 z-10 flex-shrink-0 flex h-16">
                <button
                    type="button"
                    className="p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <HiMenu className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}
