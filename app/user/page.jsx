import Image from "next/image";
import Card from "../components/Card";

function UserHome() {
  return (
    <div>
      <div className="border border-light flex w-full p-7 rounded-[20px] gap-5 my-7">
        <div className="bg-light p-3 rounded-lg">
          <Image src={"/search.svg"} alt="Search Icon" width={24} height={24} />
        </div>
        <input
          type="text"
          placeholder="Shohan, Search Your Art..."
          className="body-small bg-light py-3 px-4 w-full rounded-lg font-light outline-none"
        />
      </div>

      <div className="grid grid-cols-4 pb-10 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default UserHome;
