import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <Navbar />

      <main className="flex justify-center items-center">
        <div className="px-16 py-8 space-y-4 max-w-[600px] w-full">
          <h4 className="text-2xl font-bold text-center">Login</h4>

          <div className="flex flex-col">
            <label className="text-base font-semibold" htmlFor="email">
              Email
            </label>
            <input
              required
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
              required
              placeholder="Enter your password"
              id="password"
              className="border rounded p-2 outline-none mt-2"
              type="password"
            />
          </div>

          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register">
              <a className="text-blue-700 underline">Register here</a>
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
