import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../components/store/reducer";
import { fetchAllproducts } from "./store/slices/searchSlice";
import CardBank from "./Card";
import { Col, Row, Skeleton } from "antd";

const BodyComponent = () => {
  const details = useAppSelector((state) => state.todopago.results);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllproducts);
  }, [dispatch]);

  return (
    <Row>
      {details !== undefined ? (
        details.map((bank: any) => {
          return (
            <Col xs={24} sm={12} md={12} lg={8} key={bank.age}>
              <CardBank
                image={bank.url}
                bankName={bank.bankName}
                description={bank.description}
                className=""
              />
            </Col>
          );
        })
      ) : (
        <Skeleton />
      )}
    </Row>
  );
};

export default BodyComponent;
