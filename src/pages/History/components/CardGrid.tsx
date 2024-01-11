import React from "react";
import { Col, Row } from "antd";
import CardHistory from "./CardHistory";
import { Type } from "../Models/CardHistory.model";

const CardGrid = () => {
  console.log("grid");
  return (
    <Row gutter={16}>
      <Col span={8}>
        <CardHistory title="23:45" type={Type.WARNING} price={11200} />
      </Col>
    </Row>
  );
};

export default CardGrid;
