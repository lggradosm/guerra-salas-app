import Link from "next/link";
import React, { useEffect, useState } from "react";
import { requisitoFetch } from "../../hooks/requisitoFetch";
import { Search } from "react-bootstrap-icons";
export default function Requisitos() {
  const { filterList, search, filterByCategory } = requisitoFetch();
  const [category, setCategory] = useState("todos");
  const onChangeHandler = (e) => {
    search(e.target.value);
  };

  const categoryHandler = (e, text) => {
    e.preventDefault();
    if (text === category) {
      setCategory("todos");
      filterByCategory("todos");
    } else {
      setCategory(text);
      filterByCategory(text);
    }
  };
  return (
    <section className="container  mt-28 my-4">
      <div>
        <h2 className="text-2xl">Requisitos</h2>
        <label className="relative">
          <input
            type="text"
            placeholder="Buscar requisito"
            className="p-3 px-4 pl-11 outline-none border-2 rounded-lg border-primary shadow-sm w-full my-4"
            autoFocus
            onChange={(e) => onChangeHandler(e)}
          />
          <Search className="text-md absolute left-4 top-[10%] text-primary" />
        </label>
        <div className="flex  my-4 gap-2 lg:gap-6 text-sm box-border">
          <button
            className={`flex-1 lg:flex-none rounded-lg p-2 lg:p-3  border-2 ${
              "ESCRITURAS_PUBLICAS" === category
                ? "bg-primary text-white"
                : "hover:bg-gray-100"
            }`}
            onClick={(e) => categoryHandler(e, "ESCRITURAS_PUBLICAS")}
          >
            ESCRITURAS PUBLICAS
          </button>
          <button
            className={`flex-1 lg:flex-none rounded-lg p-2  lg:p-3  border-2  ${
              "ASUNTOS_NO_CONTENCIOSOS" === category
                ? "bg-primary text-white"
                : "hover:bg-gray-100"
            }`}
            onClick={(e) => categoryHandler(e, "ASUNTOS_NO_CONTENCIOSOS")}
          >
            NO CONTENCIOSOS
          </button>
          <button
            className={`flex-1 lg:flex-none rounded-lg p-2  lg:p-3  border-2  ${
              "VEHICULAR" === category
                ? "bg-primary text-white"
                : "hover:bg-gray-100"
            }`}
            onClick={(e) => categoryHandler(e, "VEHICULAR")}
          >
            VEHICULARES
          </button>
        </div>
        {filterList?.map((requisito, index) => (
          <Link
            href={`/requisitos/${requisito.id}`}
            key={index}
            className="text-xs md:text-md p-2 py-4 block odd:bg-gray-100 "
          >
            {requisito.nombre}
          </Link>
        ))}
      </div>
    </section>
  );
}
