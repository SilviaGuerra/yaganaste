import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../components/store/reducer";
import { fetchAllproducts } from "./store/slices/searchSlice";

const Body = () => {
  const details = useAppSelector((state) => state.todopago.results);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllproducts);
  }, [dispatch]);

  return (
    <>
      {console.log("love", details)}
      <p>Heeeeeeey you</p>
    </>
  );
};

export default Body;
