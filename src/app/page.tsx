import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div style={{ height: '100vh', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(red, yellow)' }}><div className="text-[100px]">Welcome to Admin Panel</div>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="AddProducts">
          Add New Products
        </Link>
      </div>
    </>
  );
}
