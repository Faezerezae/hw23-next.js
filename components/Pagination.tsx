"use client"

import { getAllUsers } from "@/pocketbase/users";
import { UsersList } from "@/components/lists/users-list";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export const dynamic = "force-dynamic";

export default async function Pagination() {


    const [page, setPage] = useState(1);



  let users: PocketbaseResponse<IUser>;
  try {
    users = await getAllUsers(page);
  } catch (error) {
    redirect("/login");
  }

  const handleNextPageClick = () => {
    setPage(users.page + 1);
  };

  return (
    <main className="container mx-auto py-xl">
      <UsersList users={users?.items || []} />
      <nav
        className="mx-10 py-3 flex items-center justify-start border-t-2 border-gray-300 gap-2 overflow-x-auto w-auto"
        aria-label="Pagination"
      >
        <div className="flex">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{(page - 1) * 5 + 1}</span> to{' '}
            <span className="font-medium">{(page - 1) * 5 + users.items.length}</span> of{' '}
            <span className="font-medium">{users.totalItems || 0}</span> results
          </p>
        </div>
        <div className="flex justify-start">
          <a
              className={`${
                page === 1 ? 'pointer-events-none opacity-50' : ''
              } relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}
            >
              {'<'}
          
          </a>
          <a
            onClick={handleNextPageClick}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}
            >
              {'>'}
          
          </a>
        </div>
      </nav>
    </main>
  );
}
