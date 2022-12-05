import Link from "next/link";
import React, { useEffect, useState } from "react";
import { requisitoFetch } from "../../hooks/requisitoFetch";
import { Search } from "react-bootstrap-icons";
export default function requisitos() {
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
        <h1>Requisitos</h1>
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
        <div className="flex my-4 gap-6">
          <button
            className={` rounded-lg   border-2 p-3 ${
              "PROTOCOLARES" === category
                ? "border-primary"
                : "hover:bg-gray-100"
            }`}
            onClick={(e) => categoryHandler(e, "PROTOCOLARES")}
          >
            PROTOCOLARES
          </button>
          <button
            className={` rounded-lg   border-2 p-3 ${
              "ASUNTOS_NO_CONTENCIOSOS" === category
                ? "border-primary"
                : "hover:bg-gray-100"
            }`}
            onClick={(e) => categoryHandler(e, "ASUNTOS_NO_CONTENCIOSOS")}
          >
            NO CONTENCIOSOS
          </button>
        </div>
        {filterList?.map((requisito, index) => (
          <Link
            href={`/requisitos/${requisito.id}`}
            key={index}
            className="p-2 py-4 block odd:bg-gray-100 "
          >
            {requisito.nombre}
          </Link>
        ))}
      </div>
    </section>
  );
}
