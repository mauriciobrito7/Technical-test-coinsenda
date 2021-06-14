import React, { useEffect } from "react";
import {
  Amount,
  AmountSent,
  Card,
  DateOfTransaction,
  LinkDetail,
  State,
  TypeOfTransaction,
} from "./Record.styles";
import { formatDateFromString, formatterCurrency } from "../../utils";
import { useNearScreen } from "../../hooks/useNearScreen";

function Record({ record, setCounter }) {
  const [loadMore, element] = useNearScreen();

  useEffect(() => {
    if (loadMore) {
      setCounter((prevState) => prevState + 1);
    }
  }, [loadMore]);
  return (
    <Card ref={element} to={`/transaction/${record.id}`}>
      <TypeOfTransaction>Intercambio</TypeOfTransaction>

      <Amount>
        -
        {record.currency &&
          formatterCurrency("es-CO", record.currency.currency).format(
            record.amount
          )}
      </Amount>
      <DateOfTransaction>
        {formatDateFromString(record.created_at)}
      </DateOfTransaction>
      <AmountSent>hi</AmountSent>
      <State>{record.state ? "Aceptado" : "Rechazado"}</State>
      <LinkDetail to={`/transaction/${record.id}`}>Ver detalle</LinkDetail>
    </Card>
  );
}

export default Record;
