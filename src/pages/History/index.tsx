/* eslint-disable multiline-ternary */
import React from "react";
// Components
import { DatePicker } from "antd";
import Header from "../../components/NavBar";
import CardGrid from "./components/CardGrid";
// Styles
import {
  ContainerHistoryStyled,
  ContainerRangePickerStyled,
} from "./styles/Styles";

const { RangePicker } = DatePicker;

const index = () => {
  console.log("clg");
  return (
    <div>
      <Header />
      <ContainerHistoryStyled>
        <h1>Historial de ventas</h1>
        <ContainerRangePickerStyled>
          <RangePicker />
        </ContainerRangePickerStyled>
        <CardGrid />
      </ContainerHistoryStyled>
    </div>
  );
};

export default index;
