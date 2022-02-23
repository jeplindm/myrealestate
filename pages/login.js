import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <Navbar />

      <main className="container mx-auto mt-4 flex justify-center">
        <div className="px-16 py-8 max-w-[600px] space-y-4 w-full">
          <h4 className="text-2xl font-bold text-center">Login</h4>

          <div className="flex flex-col">
            <label className="text-base font-semibold" htmlFor="firstName">
              First Name
            </label>
            <input
              placeholder="Enter your first name"
              id="firstName"
              className="border rounded p-2 outline-none mt-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base font-semibold" htmlFor="lastName">
              Last name
            </label>
            <input
              placeholder="Enter your last name"
              id="lastName"
              className="border rounded p-2 outline-none mt-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base font-semibold" htmlFor="email">
              Email
            </label>
            <input
              placeholder="Enter your email"
              id="email"
              className="border rounded p-2 outline-none mt-2"
              type="email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base font-semibold" htmlFor="password">
              Password
            </label>
            <input
              placeholder="Enter your password"
              id="password"
              className="border rounded p-2 outline-none mt-2"
              type="password"
            />
          </div>

          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register">
              <a className="hover:text-blue-700 active:text-blue-700 hover:underline">
                Register here
              </a>
            </Link>
          </p>

          <button className="bg-black hover:opacity-80 text-white font-semibold px-8 py-4 rounded w-full text-base">
            Login
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
