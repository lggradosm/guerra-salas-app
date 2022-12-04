import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarItemSmall({ link, text, onclick }) {
  const router = useRouter();
  const isActive = () => {
    if (router.asPath === link) return true;
    return false;
  };
  console.log(router.asPath);
  return (
    <li>
      <Link
        href={link}
        onClick={onclick}
        className={`h-full p-3 text-white ${
          isActive() ? "font-bold underline" : ""
        } flex items-center justify-center`}
      >
        {text}
      </Link>
    </li>
  );
}
