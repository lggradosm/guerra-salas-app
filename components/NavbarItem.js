import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarItem({ link, text }) {
  const router = useRouter();
  const isActive = () => {
    if (router.asPath === link) return true;
    return false;
  };
  return (
    <li>
      <Link
        className={`block md:p-2 hover:scale-110 transition-transform ${
          isActive() ? "font-bold text-accent" : ""
        }`}
        href={link}
      >
        {text}
      </Link>
    </li>
  );
}
