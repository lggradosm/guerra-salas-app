import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Book } from "react-bootstrap-icons";

export default function ServiceItem({ title, text }) {
  return (
    <div className="h-[15rem] relative  overflow-hidden   min-w-[20rem]  border-neutral-100 border-2 rounded-xl p-6 cursor-pointer  content-none after:bottom-0 after:left-0 after:right-0 after:absolute after:bg-primary after:h-1">
      <Book className="text-2xl text-primary mb-4" />

      <h2 className="text-lg md:text-xl text-primary font-semibold ">
        {title}
      </h2>
      <p className="text-xs  md:text-md xl:text-[.85em] mt-2 text-left">
        {text}
      </p>
    </div>
  );
}
