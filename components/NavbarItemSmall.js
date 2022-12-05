import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarItemSmall({ link, text, onclick }) {
  const router = useRouter();
  const isActive = () => {
    if (router.asPath === link) return true;
    return false;
  };
  return (
    <li
      className={`  text-white ${
        isActive() ? "font-bold underline text-accent" : ""
      }`}
    >
      <Link
        href={link}
        onClick={onclick}
        className="p-6 w-full flex items-center justify-center"
      >
        {text}
      </Link>
    </li>
  );
}
