/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useRoomStore from "@/app/store/rooms";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface FormData {
  roomName: string;
  userName: string;
}

const CreateRoom = () => {
  const { user, setUser } = useRoomStore();
  const [formData, setFormData] = useState<FormData | null>({
    roomName: "",
    userName: "",
  });

  const router = useRouter();

  useEffect(() => {
    if (user) {
      setFormData({ roomName: user.roomName, userName: user.userName });
    }
  }, [user]);
  console.log(user);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    if (!formData) return;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const roomId = uuidv4();
    const roomData = {
      roomId,
      ...formData,
    };
    setUser(roomData);
    if (roomData) {
      router.push("/room");
    }
    console.log("Room data submitted:", roomData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl text-black font-bold mb-4 text-center">
          Create Room
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="roomName"
          >
            Room Name
          </label>
          <input
            type="text"
            id="roomName"
            name="roomName"
            value={formData?.roomName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="userName"
          >
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData?.userName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {!user ? "Create Room" : "Open room"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRoom;
