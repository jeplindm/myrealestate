import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const Register = () => {
  return (
    <div>
      <Navbar />

      <main className="flex justify-center">
        <div className="px-16 py-8 max-w-[600px] space-y-4 w-full">
          <h4 className="text-2xl font-bold text-center">Register</h4>

          <div className="flex flex-col">
            <label className="text-base font-semibold" htmlFor="firstName">
              First Name
            </label>
            <input
              required
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
              required
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
            You are already have an account.{" "}
            <Link href="/login">
              <a className="text-blue-700 underline">Please login here</a>
            </Link>
          </p>

          <button className="bg-black hover:opacity-80 text-white font-semibold px-8 py-4 rounded w-full text-base">
            Register
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
