import React from "react";
import {
  RecordContainer,
  TypeOfTransaction,
  DateOfTransaction,
  Amount,
  Status,
  LinkDetail,
} from "./Record.styles";

function Record({ children }) {
  return (
    <RecordContainer>
      <TypeOfTransaction>Intercambio</TypeOfTransaction>
      <DateOfTransaction>Junio 12, 2021</DateOfTransaction>
      <Amount>-1000000</Amount>
      <Status>Completado</Status>
      <LinkDetail>Ver detalle</LinkDetail>
    </RecordContainer>
  );
}

export default Record;
