import React from 'react'
import Link from 'next/link'
import NavbarItem from './NavbarItem';
import NavbarItemSmall from './NavbarItemSmall';

import {List,X} from 'react-bootstrap-icons'
import {useBoolean} from '../hooks/useBoolean'
export default function Navbar() {

  const open = ()=>{
    visibility.on();
    document.body.style.overflow = 'hidden'
  }

  const close = ()=>{
    visibility.off();
    document.body.style.overflow = 'unset'
  }

  const visibility = useBoolean();
  return (
    <nav className='h-24 w-full  text-primary flex justify-between items-center  p-10 xl:px-40  overflow-hidden'>
        <Link href={"/"} className="text-2xl whitespace-nowrap block">Notaría Guerra Salas </Link>
        <List className='lg:hidden cursor-pointer text-2xl block' onClick={open}/>
        <ul className='hidden lg:flex gap-4 xl:gap-10 text-sm md:text-lg justify-center items-center whitespace-nowrap'>
            <NavbarItem link={"/"} text="Inicio" />
            <NavbarItem link={"/servicios"} text="Servicios Notariales" />
            <NavbarItem link={"/requisitos"} text="Requisitos" />
            <NavbarItem link={"/tarifario"} text="Tarifario" />
            <NavbarItem link={"/nosotros"} text="Nosotros" />
            <NavbarItem link={"/contacto"} text="Contacto" />
        </ul>
     
        <div className={` fixed overflow-hidden  top-0 bottom-0  left-0 duration-500  ${visibility.value? "right-0 ":"right-full"} bg-primary z-10 box-border`}>
          <X onClick={close} className='lg:hidden cursor-pointer text-5xl block text-white absolute right-4 top-4'/>
          <ul className='h-full py-20 gap- flex flex-col text-sm justify-center items-stretch whitespace-nowrap'>
            <NavbarItemSmall onclick={close} link={"/"} text="Inicio" />
            <NavbarItemSmall onclick={close} link={"/servicios"} text="Servicios Notariales" />
            <NavbarItemSmall onclick={close} link={"/requisitos"} text="Requisitos" />
            <NavbarItemSmall onclick={close} link={"/tarifario"} text="Tarifario" />
            <NavbarItemSmall onclick={close} link={"/nosotros"} text="Nosotros" />
            <NavbarItemSmall onclick={close} link={"/contacto"} text="Contacto" />
        </ul>
        </div>

       
    </nav>
  )
}
