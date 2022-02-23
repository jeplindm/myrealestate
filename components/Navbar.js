import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  console.log(router.pathname, "router");
  return (
    <nav className="border-b flex justify-between items-center py-2 pl-2 pr-2 lg:px-6">
      <div className="relative w-24 h-10 sm:w-28 lg:w-32 lg:h-14">
        <Image
          onClick={() => {
            router.push("/");
          }}
          src="/mre-text-logo.png"
          alt="mre text logo"
          layout="fill"
          className="object-cover hover:cursor-pointer"
        />
      </div>

      {router.pathname === "/login" || router.pathname === "/register" ? null : (
        <div>
          <ul className="flex space-x-4">
            <li
              onClick={() => router.push("/login")}
              className="py-2 px-4 text-xs sm:text-sm lg:text-md border-1 font-semibold hover:underline hover:cursor-pointer"
            >
              Login
            </li>
            <li
              onClick={() => router.push("/register")}
              className="bg-black text-xs sm:text-sm lg:text-md text-white font-semibold py-2 px-4 rounded-lg hover:cursor-pointer hover:opacity-80"
            >
              Register
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
