import Image from "next/image";
import Link from "next/link";

import notFoundPageImage from "../public/images/404_image.webp";
const NotFound = () => {
  return (
    <div className="py-[5rem] h-screen lg:h-full text-sm  w-full flex flex-col justify-center items-center">
      <Image
        src={notFoundPageImage}
        alt={"not page found"}
        className="lg:w-[50rem]"
      />
      <Link
        className="  lg:text-lg lg:px-3 underline lg:py-2 text-primary px-2 py-1"
        href={"/"}
      >
        Regresar
      </Link>
    </div>
  );
};
export default NotFound;
