import React from "react";
import NavbarItem from "./NavbarItem";
import NavbarItemSmall from "./NavbarItemSmall";
import Link from "next/link";
import { List, X } from "react-bootstrap-icons";
import { useBoolean } from "../hooks/useBoolean";
export default function Navbar() {
  const open = () => {
    visibility.on();
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    visibility.off();
    document.body.style.overflow = "unset";
  };

  const visibility = useBoolean();
  return (
    <nav className="h-10 w-full fixed top-0  bg-white z-40 shadow-md text-primary flex justify-between items-center  p-9 xl:px-40  overflow-hidden">
      <Link href={"/"} className="text-2xl whitespace-nowrap block font-bold">
        Notaría Guerra Salas{" "}
      </Link>
      <List
        className="lg:hidden cursor-pointer text-2xl block"
        onClick={open}
      />
      <ul className="hidden lg:flex gap-4 xl:gap-10 text-sm md:text-lg justify-center items-center whitespace-nowrap">
        <NavbarItem link={"/"} text="Inicio" />
        <NavbarItem
          link={"/#servicios-notariales"}
          text="Servicios Notariales"
        />
        <NavbarItem link={"/#nosotros"} text="Nosotros" />

        <NavbarItem link={"/requisitos"} text="Requisitos" />
        <NavbarItem link={"/tarifario"} text="Tarifario" />
        <NavbarItem link={"/contacto"} text="Contacto" />
      </ul>

      <div
        className={` fixed h-screen flex items-center justify-center overflow-hidden  top-0 bottom-0 py-[2rem]  left-0 duration-500  ${
          visibility.value ? "right-0  overflow-y-auto " : "right-full "
        } bg-primary box-border`}
      >
        <X
          onClick={close}
          className="lg:hidden cursor-pointer text-5xl block text-white absolute right-4 top-4"
        />
        <ul
          className={` w-full gap-[3rem] duration-300  ${
            visibility.value ? "opacity-100 " : "opacity-0"
          }  flex flex-col text-sm justify-between items-stretch whitespace-nowrap`}
        >
          <NavbarItemSmall onclick={close} link={"/"} text="Inicio" />
          <NavbarItemSmall
            onclick={close}
            link={"/#servicios-notariales"}
            text="Servicios Notariales"
          />
          <NavbarItemSmall
            onclick={close}
            link={"/#nosotros"}
            text="Nosotros"
          />

          <NavbarItemSmall
            onclick={close}
            link={"/requisitos"}
            text="Requisitos"
          />
          <NavbarItemSmall
            onclick={close}
            link={"/tarifario"}
            text="Tarifario"
          />
          <NavbarItemSmall onclick={close} link={"/contacto"} text="Contacto" />
        </ul>
      </div>
    </nav>
  );
}
