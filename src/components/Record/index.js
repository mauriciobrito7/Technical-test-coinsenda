import React from "react";
import {
  Amount,
  AmountSent,
  Card,
  DateOfTransaction,
  LinkDetail,
  State,
  TypeOfTransaction,
} from "./Record.styles";
import { RECORDS_HEADERS } from "../../constants/";
import { breakpoints } from "../../styles/theme";
import useMedia from "../../hooks/useMedia";
import { formatDateFromString, formatterCurrency } from "../../utils";

function Record({ record }) {
  const tablet = useMedia(breakpoints.tablet);
  return (
    <Card>
      <TypeOfTransaction>Intercambio</TypeOfTransaction>

      <Amount>
        -
        {formatterCurrency("es-CO", record.currency.currency).format(
          record.amount
        )}
      </Amount>
      <DateOfTransaction>
        {formatDateFromString(record.created_at)}
      </DateOfTransaction>
      <AmountSent>hi</AmountSent>
      <State>{record.state}</State>
      <LinkDetail>Ver detalle</LinkDetail>
    </Card>
  );
}

export default Record;
