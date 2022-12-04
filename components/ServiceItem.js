import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Book } from "react-bootstrap-icons";

export default function ServiceItem({ image, title, text }) {
  return (
    <div className=" relative  overflow-hidden   min-w-[20rem]  border-neutral-100 border-2 rounded-xl p-6 cursor-pointer  content-none after:bottom-0 after:left-0 after:right-0 after:absolute after:bg-primary after:h-1">
      <Book className="text-2xl text-primary" />
      {/* <Image
        alt="service_image"
        src={image}
        className="w-full rounded-[.2rem]"
      /> */}
      <h2 className="text-lg md:text-xl text-primary font-semibold ">
        {title}
      </h2>
      <p className="text-sm  md:text-md mt-4 text-left">{text}</p>
      {/* <Link
        href={"#"}
        className="block  hover:border-primary hover:underline border-white border-2 rounded-xl p-3 duration-200 text-primary text-center mt-6"
      >
        Ver requisitos
      </Link> */}
    </div>
  );
}
