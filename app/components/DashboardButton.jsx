import Link from "next/link";

function DashboardButton({ text, className, path }) {
  return (
    <>
      <Link href={path} className="w-full">
        <button
          className={`hover:bg-light text-gray-light hover:text-black w-full py-2 rounded-lg small text-left pl-4 transition-all ${className}`}
        >
          {text}
        </button>
      </Link>
    </>
  );
}

export default DashboardButton;
