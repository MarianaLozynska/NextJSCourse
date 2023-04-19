"use client";
import Image from "next/image";
import errorMascote from "../../public/icons/error.png";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="h-screen bg-grey-200 flex flex-col justify-center items-center">
      <Image src={errorMascote} alt="Error" className="w-56 mb-8" />
      <div className="bg-white px-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold">Well, this is embarrassing... </h3>
        <p className="text-reg font-bold">We couldn't find that restaurant </p>
        <p className="mt-6 text-sm font-light">Error Code: 404</p>
      </div>
    </div>
  );
}
