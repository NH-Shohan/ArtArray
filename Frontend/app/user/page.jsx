"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import defaultImage from "../../public/default.svg";
import Button from "../components/Button";

function UserHome() {
  const [userArts, setUserArts] = useState([]);
  console.log(userArts);

  useEffect(() => {
    const userId = 1;

    axios
      .get(`http://localhost:8081/spring-tutorial/arts/${userId}`)
      .then((response) => {
        setUserArts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching arts:", error);
      });
  }, []);

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
        {userArts?.map((art) => (
          <div
            key={art.id}
            className="border border-light flex flex-col p-4 rounded-[20px] w-full"
          >
            <Image
              src={art.image || defaultImage}
              alt="Image"
              sizes="100%"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <h3 className="mt-3 text-gray-light">{art.title}</h3>
            <p className="bold">
              $ <span>{art.price}</span>
            </p>
            <Button
              text="Add to cart"
              outline
              href="/user"
              icon
              width="24"
              height={"24"}
              className={"w-full mt-5"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserHome;
