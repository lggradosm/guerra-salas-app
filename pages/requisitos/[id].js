import React from "react";
import { useRouter } from "next/router";
import { useRequisitos } from "../../hooks/useRequisitos";
export default function RequisitoDetail() {
  const router = useRouter();
  const requisitoId = router.query.id;
  const requisito = useRequisitos().searchById(requisitoId);
  console.log(requisito);
  return <div className=" mt-28 my-4">{requisito?.nombre}</div>;
}
