import React from "react";
import {
  Header,
  HeaderTitle,
  HeaderSubtitle,
  ContainerDetail,
  Body,
  ListDetails,
  Detail,
  Field,
  FieldValue,
} from "./RecordDetail.styles";

function RecordDetail() {
  return (
    <ContainerDetail>
      <Header>
        <HeaderTitle>Deposito</HeaderTitle>
        <HeaderSubtitle>Actualizado el 29 de mayo de 2021</HeaderSubtitle>
      </Header>
      <Body>
        <ListDetails>
          <Detail>
            <Field>Estado:</Field>
            <FieldValue>Aceptado</FieldValue>
          </Detail>
          <Detail>
            <Field>Divisa:</Field>
            <FieldValue>COP</FieldValue>
          </Detail>
          <Detail>
            <Field>Cantidad:</Field>
            <FieldValue>1.700.000</FieldValue>
          </Detail>
          <Detail>
            <Field>Costo:</Field>
            <FieldValue>0</FieldValue>
          </Detail>
          <Detail>
            <Field>Creado en:</Field>
            <FieldValue>29 de mayo de 2021</FieldValue>
          </Detail>
          <Detail>
            <Field>Actualizado en:</Field>
            <FieldValue>29 de mayo de 2021</FieldValue>
          </Detail>
          <Detail>
            <Field>Número de orden:</Field>
            <FieldValue>1235562388958</FieldValue>
          </Detail>
        </ListDetails>
      </Body>
    </ContainerDetail>
  );
}

export default RecordDetail;
