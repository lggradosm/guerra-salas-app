import { useEffect, useState } from "react";

export const useRequisitoFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [filterList, setFilterList] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch("/api/requisito")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setFilterList(data);
      });
  }, []);

  const search = (text) => {
    setFilterList(
      data?.filter((requisito) =>
        (requisito.id + requisito.nombre).includes(text.toUpperCase())
      )
    );
  };

  const searchById = (id) => {
    return data?.filter((requisito) => requisito.id === id)[0];
  };

  return { data, filterList, isLoading, search, searchById };
};
