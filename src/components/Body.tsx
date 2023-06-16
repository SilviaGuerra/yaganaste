import React, { useEffect } from "react";
import { Col, Row, Skeleton } from "antd";
import { useAppDispatch, useAppSelector } from "../components/store/reducer";
import { fetchAllBanks } from "./store/slices/listBanksSlice";
import CardBank from "./Card";

export type BankProps = {
  age: number;
  bankName: string;
  description: string;
  url: string;
};

const BodyComponent = () => {
  const allBanks = useAppSelector((state) => state.yaganaste.banks.results);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBanks) !== undefined ? console.log("") : <Skeleton />;
  }, [dispatch]);

  return (
    <Row>
      {allBanks !== undefined ? (
        allBanks.map((bank: BankProps) => {
          return (
            <Col xs={24} sm={12} md={12} lg={8} key={bank.age}>
              <CardBank
                image={bank.url}
                bankName={bank.bankName}
                description={bank.description}
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
