import Link from "next/link";
import React, { useEffect, useState } from "react";
import { requisitoFetch } from "../../hooks/requisitoFetch";
export default function requisitos() {
  const { filterList, search } = requisitoFetch();
  const [searchText, setSearchText] = useState("");
  const onChangeHandler = (e) => {
    search(e.target.value);
  };
  return (
    <section className="container  mt-28 my-4">
      <div>
        <h1>Requisitos</h1>
        <label className="">
          <input
            type="text"
            placeholder="Buscar requisito"
            className="p-2 outline-none shadow-sm w-full my-4"
            autoFocus
            onChange={(e) => onChangeHandler(e)}
          />
        </label>
        {filterList?.map((requisito, index) => (
          <Link
            href={`/requisitos/${requisito.id}`}
            key={index}
            className="p-2 block odd:bg-gray-100 "
          >
            {requisito.nombre}
          </Link>
        ))}
      </div>
    </section>
  );
}
