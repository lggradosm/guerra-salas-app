import React from "react";
import { useRouter } from "next/router";
import { requisitoFetch } from "../../hooks/requisitoFetch";
import Image from "next/image";
import { FileEarmarkArrowDownFill } from "react-bootstrap-icons";
import { saveAs } from "file-saver";

export default function RequisitoDetail() {
  const router = useRouter();
  const requisitoId = router.query.id;
  const requisito = requisitoFetch().searchById(requisitoId);

  const saveImageHandler = () => {
    saveAs(requisito.image.src, requisito.imageUrl + ".jpg");
  };
  return (
    <div className="container mt-32 my-20">
      <div className="flex flex-col lg:flex-row  lg:justify-between lg:items-center mb-10">
        <h2 className="text-center mb-4 text-lg lg:text-xl font-bold">
          {requisito?.id + " - " + requisito?.nombre}
        </h2>
        <div
          className="flex items-center justify-center p-3 rounded-lg cursor-pointer bg-primary text-white"
          onClick={saveImageHandler}
        >
          <p>Descargar</p> <FileEarmarkArrowDownFill className="text-lg ml-2" />
        </div>
      </div>
      {requisito && (
        <Image
          src={requisito.image}
          alt={requisito.imageUrl}
          placeholder="blur"
          className="w-full"
        />
      )}
    </div>
  );
}
