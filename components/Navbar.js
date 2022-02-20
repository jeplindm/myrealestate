import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-2 pl-2 pr-2 lg:px-6">
      <div className="relative w-24 h-10 sm:w-28 lg:w-32 lg:h-14">
        <Image
          src="/mre-text-logo.png"
          alt="mre text logo"
          layout="fill"
          className="object-cover"
        />
      </div>

      <div className="">
        <ul className="flex space-x-4">
          <li className="py-2 px-4 text-xs sm:text-sm lg:text-md border-1 font-semibold hover:underline hover:cursor-pointer">
            Login
          </li>
          <li className="bg-black text-xs sm:text-sm lg:text-md text-white font-semibold py-2 px-4 rounded-lg hover:cursor-pointer hover:opacity-70">
            Register
          </li>
        </ul>
      </div>
    </nav>
  );
}
