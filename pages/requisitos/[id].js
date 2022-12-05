import React from "react";
import { useRouter } from "next/router";
import { requisitoFetch } from "../../hooks/requisitoFetch";
export default function RequisitoDetail() {
  const router = useRouter();
  const requisitoId = router.query.id;
  const requisito = requisitoFetch().searchById(requisitoId);
  console.log(requisito);
  return <div className=" mt-28 my-4">{requisito?.nombre}</div>;
}
