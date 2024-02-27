import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiOutlineX } from 'react-icons/hi'
import { TextInput } from './inputs/textInput'
import { classNames } from '@/utils/tools'
import { Controller, useForm } from 'react-hook-form'
import { loginFormSchema, loginFormType } from '@/utils/validations/login-validation'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { PrimaryContainedButton } from './buttons/contained-btns'
import { addUsers, updateUsers } from '@/pocketbase/users'

export default function ModalUpdate({ onUpdate }:any) {
  const [open, setOpen] = useState(false)
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const { handleSubmit, control: addUserFormControl,reset } = useForm<loginFormType>({
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <>
      <button onClick={() => setOpen(true)}
        type="submit"
        className="inline-flex m-1 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700"
        >
        Edit Account
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <HiOutlineX className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-start sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Edit Accountant
                    </Dialog.Title>

                  </div>
                </div>
                <div className="mt-2">
                  <form onSubmit={handleSubmit(onUpdate)} className="mt-lg">
                    <div className="space-y-md">
                      <Controller
                        name="username"
                        control={addUserFormControl}
                        render={({ field, fieldState: { error } }) => (
                          <TextInput
                            placeholder="Enter your username"
                            error={error?.message}
                            labelTitle="Username"
                            type="text"
                            {...field}
                          />
                        )}
                      />
                      <Controller
                        control={addUserFormControl}
                        name="password"
                        render={({ field, fieldState: { error } }) => (
                          <TextInput
                            placeholder="Enter your password"
                            labelTitle="Password"
                            type="password"
                            error={error?.message}
                            {...field}
                          />
                        )}
                      />
                    </div>
                    <div className="rounded-md overflow-hidden mt-xl">
                      <PrimaryContainedButton
                        type="submit"
                        title={<p className="font-semibold text-white w-full">Update</p>}
                        disabled={loading}
                      />
                    </div>
                    <div className="rounded-md overflow-hidden mt-2 border-2 border-primary-800">
                      <button className={classNames(
                        "w-full rounded-md px-sm py-xs text-primary-800",
                      )} type="button" disabled={loading} onClick={()=>reset()}>Clear</button>
                    </div>
                    <div
                      className={classNames(
                        !!error ? "block" : "hidden",
                        "bg-red-50 ring-1 ring-red-300 text-red-600",
                        "px-sm py-xs rounded-md mt-md"
                      )}
                    >
                      {error}
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
