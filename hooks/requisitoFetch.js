import { useEffect, useState } from "react";

export const requisitoFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [filterList, setFilterList] = useState(null);
  const [tempList, setTempList] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch("/api/requisito")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setTempList(data);
        setFilterList(data);
      });
  }, []);
  useEffect(() => {
    setFilterList(tempList);
  }, [tempList]);

  const search = (text) => {
    setFilterList(
      tempList?.filter((requisito) =>
        (requisito.id + requisito.nombre).includes(text.toUpperCase())
      )
    );
  };

  const filterByCategory = (category) => {
    category === "todos"
      ? setTempList(data)
      : setTempList(data?.filter((requisito) => requisito.type === category));
    console.log(tempList);
  };

  const searchById = (id) => {
    return data?.filter((requisito) => requisito.id === id)[0];
  };

  return { data, filterList, isLoading, search, searchById, filterByCategory };
};
