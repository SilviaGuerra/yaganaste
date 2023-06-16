import React, { useState } from "react";
import { Col, Row, Skeleton, Input, Button } from "antd";
import { useAppDispatch, useAppSelector } from "../components/store/reducer";
import { fetchAllBanks } from "./store/slices/listBanksSlice";
import CardBank from "./Card";

const { Search } = Input;

export type BankProps = {
  age: number;
  bankName: string;
  description: string;
  url: string;
};

const BodyComponent = () => {
  const [stateData, setData] = useState(false);
  const allBanks = useAppSelector((state) => state.yaganaste.banks.results);
  const dispatch = useAppDispatch();

  const showAllBanks = () => {
    dispatch(fetchAllBanks);
    setData(true);
  };

  return (
    <>
      <Row
        style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
      >
        {/* <Search
          allowClear
          placeholder="Buscar"
          enterButton="Buscar"
          size="large"
          // onSearch={onSearch}
          style={{ width: "50%" }}
        /> */}
        <Button
          onClick={showAllBanks}
          type="primary"
          size="large"
          style={{ marginLeft: "2%" }}
        >
          Mostrar todos
        </Button>
      </Row>
      <Row>
        {stateData ? (
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
    </>
  );
};

export default BodyComponent;
