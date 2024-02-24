import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import Link from "next/link"

export default function Home() {
  return (
    <div className="h-[932px] relative bg-gray-50">
      <Navbar />
      <div className="container mx-auto text-center grid gap-10 lg:gap-5 justify-center items-center">
        <h1 className="font-extrabold lg:text-[30px] xl:text-[50px] mt-20">Manage Your <span className="text-primary-700">Company Accounting</span></h1>
        <p className="text-gray-500">Create your company, and manage all your accounting things on our platform.</p>
        <div className="flex gap-2 justify-center items-center m-4 text-sm">
          <Link href={"/Login"} className="bg-primary-700 text-white py-2 px-4 rounded-md shadow">Login</Link>
          <Link href={"/Signup"} className="text-primary-700 py-2 px-4 rounded-md shadow">Signup</Link>
        </div>
        <Image
          priority
          src="/SVG-1.png"
          height={400}
          width={800}
          alt="Path"
          className="text-center flex justify-center items-center lg:m-5"
        />
      </div>
      <Footer />
    </div>
  );
}
