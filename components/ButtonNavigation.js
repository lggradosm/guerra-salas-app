import Link from "next/link";
import React from "react";
import { Telephone, Whatsapp, GeoAlt } from "react-bootstrap-icons";
export default function ButtonNavigation() {
  return (
    <div className="md:hidden fixed z-30 text-white text-xs items-center shadow-lg border-t-4 border-[rgba(0,0,0,.1)] justify-around bottom-0 w-full h-16  bg-primary flex">
      <Link
        href={"tel://044237200 "}
        className="flex flex-col items-center justify-center flex-1 h-full"
      >
        <Telephone className="w-6 h-6" />
        <span>Llamar</span>
      </Link>
      <Link
        href={
          "https://www.google.com/maps/dir//''/@-8.1219289,-79.0410366,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x91ad3d73ac2ae53f:0x772050a20d95e18c!2m2!1d-79.0385966!2d-8.1239214"
        }
        target={"_blank"}
        className="flex flex-col items-center justify-center  flex-1  h-full"
      >
        <GeoAlt className="w-6 h-6" />
        <span>Como llegar</span>
      </Link>
      <Link
        target={"_blank"}
        href={
          "https://api.whatsapp.com/send/?phone=51949881710&text&type=phone_number&app_absent=0"
        }
        className="flex flex-col items-center justify-center  flex-1  h-full"
      >
        <Whatsapp className="w-6 h-6" />
        <span>Whatsapp</span>
      </Link>
    </div>
  );
}
