import Image from "next/image";
import defaultImage from "../../public/default.svg";
import Button from "./Button";

function Card() {
  return (
    <div className="border border-light flex flex-col p-4 rounded-[20px] w-full">
      <Image
        src={defaultImage}
        alt="Image"
        sizes="100%"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <h3 className="mt-3 text-gray-light">Tile of Art</h3>
      <p className="bold">
        $ <span>300</span>
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
  );
}

export default Card;
