import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen bg-gray-100">
      <div className="text-4xl text-black">Welcome to Mystery Room</div>
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
          <Link href="/create">Create Room</Link>
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">
          <Link href="/join">Join Room</Link>
        </button>
      </div>
    </div>
  );
}
