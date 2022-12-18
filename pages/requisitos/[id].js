import React from "react";
import { useRouter } from "next/router";
import { requisitoFetch } from "../../hooks/requisitoFetch";
import Image from "next/image";
import { FileEarmarkArrowDownFill } from "react-bootstrap-icons";
import { saveAs } from "file-saver";
import { AdvancedImage } from "@cloudinary/react";

export default function RequisitoDetail() {
  const router = useRouter();
  const requisitoId = router.query.id;
  const requisito = requisitoFetch().searchById(requisitoId);
  const imageName = requisito?.nombre.split(" ").join("-");
  console.log(requisito);

  const saveImageHandler = () => {
    // const url = window.URL.createObjectURL(new Blob(requisito.imageUrl));
    // const link = document.createElement("a");
    // link.href = link;
    // link.setAttribute("download", "image.jpg");
    // document.body.appendChild(link);
    // link.click();
    saveAs(new Blob([requisito.imageUrl]), "test.jpg");
  };
  return (
    <div className="container mt-32 my-20">
      <div className="flex flex-col lg:flex-row  lg:justify-between lg:items-center mb-10">
        <h2 className="text-center mb-4">{requisito?.nombre}</h2>
        <div
          className="flex items-center justify-center p-3 rounded-lg cursor-pointer bg-primary text-white"
          onClick={saveImageHandler}
        >
          <p>Descargar</p> <FileEarmarkArrowDownFill className="text-lg ml-2" />
        </div>
      </div>
      {requisito && (
        <Image
          src={requisito.imageUrl}
          alt={imageName}
          loading="lazy"
          className="w-full"
        />
      )}
    </div>
  );
}
