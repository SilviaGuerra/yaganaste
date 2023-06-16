import React, { useEffect } from "react";
import { Col, Row, Skeleton } from "antd";
import { useAppDispatch, useAppSelector } from "../components/store/reducer";
import { fetchAllBanks } from "./store/slices/listBanksSlice";
import CardBank from "./Card";

const BodyComponent = () => {
  const allBanks = useAppSelector((state) => state.yaganaste.banks.results);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBanks);
  }, [dispatch]);

  return (
    <Row>
      {allBanks !== undefined ? (
        allBanks.map((bank: any) => {
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
