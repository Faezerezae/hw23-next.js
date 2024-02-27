import { getAllUsers } from "@/pocketbase/users";
import { UsersList } from "@/components/lists/users-list";
import { redirect } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminPanel() {
  let users: PocketbaseResponse<IUser>;
  try {
    users = await getAllUsers(1);
  } catch (error) {
    redirect("/login");
  }

  return (
    <main className="container mx-auto py-xl">
      <UsersList users={users?.items || []} />
      <nav
        className="bg-white mx-10 py-3 flex items-center justify-start border-t-2 border-gray-300 gap-2 overflow-x-auto w-auto"
        aria-label="Pagination"
      >
        <div className="flex">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{((users.page ) - 1) * 5 + 1}</span> to{' '}
            <span className="font-medium">{((users.page )- 1) * 5 + users.items.length}</span> of{' '}
            <span className="font-medium">{users.totalItems || 0}</span> results
          </p>
        </div>
        <div className="flex justify-start">
          <Link href={`/admin?page=${(users.page ) - 1}`}
              className={`${
                (users.page ) === 1 ? 'pointer-events-none opacity-50' : ''
              } relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}
            >
              {'<'}
          
          </Link>
          <Link href={`/admin?page=${(users.page ) + 1}`}
            
              className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}
            >
              {'>'}
          
          </Link>
        </div>
      </nav>
    </main>
  );
}
