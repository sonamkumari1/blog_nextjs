import Sidebar from "../../components/AdminComponents/Sidebar";
import Image from "next/image";
import user from "@/assets/user.png";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
            <Image
              src={user}
              width={180}
              alt="GitBook Logo"
              className="w-[40px] "
            />
          </div>
        {children}
        </div>
      </div>
    </>
  );
}
