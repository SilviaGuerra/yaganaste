import React from "react";
import { Card } from "antd";

const { Meta } = Card;

interface CardBankProps {
  bankName: string;
  className?: string;
  image: string;
  description: string;
}

const CardBank = (props: CardBankProps) => {
  return (
    <Card
      hoverable
      style={{ width: 240, margin: "10%" }}
      cover={<img alt="example" src={props.image} />}
    >
      <Meta title={props.bankName} description={props.description} />
    </Card>
  );
};

export default CardBank;
