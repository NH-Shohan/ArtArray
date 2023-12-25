import Image from "next/image";
import DashboardButton from "../components/DashboardButton";
import DashboardLayout from "./layout";

function AdminPage() {
  return (
    <section className="grid grid-cols-12 gap-4 h-screen py-10">
      <div className="p-5 col-span-3 row-span-2 border border-light rounded-xl flex flex-col items-center relative">
        <Image src="/user.svg" alt="User Image" width={100} height={100} />
        <p className="mt-4 bold">Nahim Hossain Shohan</p>

        <hr className="border border-light w-full my-7" />

        <DashboardButton text="Dashboard" path="" />
        <DashboardButton text="Arts" path="" />
        <DashboardButton text="Users" path="" />

        <div className="absolute bottom-0 w-full p-5">
          <DashboardButton
            text="Logout"
            className={"hover:text-red hover:bg-red-light"}
            path=""
          />
        </div>
      </div>
      <div className="col-span-9 border border-light rounded-xl h-[60px] flex items-center pl-6">
        <h3>
          <span className="font-normal">ArtArray - </span>
          <span>Dashboard</span>
        </h3>
      </div>
      <DashboardLayout />;
    </section>
  );
}

export default AdminPage;
