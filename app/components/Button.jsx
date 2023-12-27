import Image from "next/image";
import Link from "next/link";

export default function Button({
  text,
  className,
  outline,
  fill,
  src,
  width,
  height,
  href,
}) {
  return (
    <Link href={href}>
      <button
        className={
          outline
            ? `border border-gray bg-white py-2 px-8 rounded-lg hover:bg-gray hover:text-white transition-all flex items-center gap-1 ${className}`
            : fill &&
              `border border-gray py-2 px-8 rounded-lg bg-gray hover:bg-[#282828] transition-all text-white ${className}`
        }
      >
        {src && <Image src={src} alt="Image" width={width} height={height} />}
        {text}
      </button>
    </Link>
  );
}
