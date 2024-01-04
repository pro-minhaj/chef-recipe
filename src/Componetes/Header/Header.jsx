import { Fragment, useContext, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom';
import { userContext } from '../../Auth_Context/Auth_Context';
import toast from 'react-hot-toast';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const { user, logOut } = useContext(userContext);

    // Toast
    const success = (success) => toast.success(success);
    const error = (error) => toast.error(error);

    // Handle Logout
    const handleLogout = () => {
        logOut()
            .then(() => {
                success('LogOut SuccessFull')
            })
            .catch(e => {
                error(e.message)
            })
    }

    return (
        <div>
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-20 items-center justify-center sm:justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                            alt="Your Company"
                                        />
                                    </div>
                                </div>
                                <div className="hidden sm:block">
                                    <div className="flex space-x-6">
                                        <NavLink className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-white font-medium" : ""
                                        } to="/">Home</NavLink>
                                        <NavLink className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-white font-medium" : ""
                                        } to="/blog">Blog</NavLink>
                                        {
                                            user ? <button onClick={handleLogout}>Logout</button> : <NavLink className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-white font-medium" : ""
                                            } to="/login">Login</NavLink>
                                        }
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    {/* Profile dropdown */}
                                    {
                                        user && <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src={user && user.photoURL === null ? 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' : user.photoURL}
                                                        alt=""
                                                    />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a

                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                {
                                                                                                                user && user.displayName
                                                                }
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link to="/profile"
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Your Profile
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a onClick={handleLogout}
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Sign out
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    }
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 flex items-center flex-col gap-3 py-4">
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white font-medium" : ""
                                } to="/">Home</NavLink>
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white font-medium" : ""
                                } to="/blog">Blog</NavLink>
                                {
                                    user ? <button onClick={handleLogout}>Logout</button> : <NavLink className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white font-medium" : ""
                                    } to="/login">Login</NavLink>
                                }
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default Header;