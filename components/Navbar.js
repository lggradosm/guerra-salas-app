import React from 'react'
import Link from 'next/link'
import NavbarItem from './NavbarItem';
export default function Navbar() {
  
  return (
    <nav className='h-24 w-full text-primary flex justify-between items-center  px-20 xl:px-40 '>
        <Link href={"/"} className="text-2xl whitespace-nowrap">Notaría Guerra Salas </Link>
        <ul className='hidden lg:flex gap-4 xl:gap-10 text-sm md:text-lg justify-center items-center whitespace-nowrap'>
            <NavbarItem link={"/"} text="Inicio" />
            <NavbarItem link={"/servicios"} text="Servicios Notariales" />
            <NavbarItem link={"/requisitos"} text="Requisitos" />
            <NavbarItem link={"/tarifario"} text="Tarifario" />
            <NavbarItem link={"/nosotros"} text="Nosotros" />
            <NavbarItem link={"/contacto"} text="Contacto" />
        </ul>
    </nav>
  )
}
