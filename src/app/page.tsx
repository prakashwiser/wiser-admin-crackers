import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(green, yellow)",
        }}
      >
        <div className="text-[100px]">Welcome to Admin Panel</div>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"
          href="AddProducts"
        >
          Add New Products
        </Link>
        <div className="d-flex my-5">
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-3  font-bold rounded"
            href="Sign"
          >
            Sign in
          </Link>
          <Link
            className="ms-5 bg-green-500 hover:bg-green-700 text-white py-2 font-bold px-3 rounded"
            href="Signup"
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
}
