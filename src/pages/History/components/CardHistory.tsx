import React from "react";
import { Card, Typography } from "antd";
import { ICardHistory, Type } from "../Models/CardHistory.model";

const { Text } = Typography;

const CardHistory = ({ title, type, price }: ICardHistory) => (
  <Card title={`${title}hs`} bordered={false}>
    <p>Total: ${price} </p>
    <Text type={type}>
      Medio de pago: {type === Type.WARNING ? "Transferencia" : "Efectivo"}
    </Text>
  </Card>
);

export default CardHistory;
