import React from "react";
import logobg from "@/assets/logo-bg.png";
import Image from "next/image";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoBagAdd } from "react-icons/io5";
import { RiMailAddLine } from "react-icons/ri";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image
          src={logobg}
          width={180}
          alt="GitBook Logo"
          className="w-[130px] sm:w-auto"
        />
      </div>

      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link href='/admin/addProduct'  className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <IoIosAddCircleOutline /> <p>Add blogs</p>
          </Link>

          <Link href='/admin/blogList' className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
          <IoBagAdd /> <p>Blog Lists</p>
          </Link>

          <Link href='/admin/subscriptions' className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
          <RiMailAddLine /> <p>Subscriptions</p>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;
