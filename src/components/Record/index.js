import React, { useEffect } from "react";
import {
  Amount,
  AmountSent,
  Card,
  DateOfTransaction,
  LinkDetail,
  State,
  TypeOfTransaction,
  Icon,
} from "./Record.styles";
import { formatDateFromString, formatterCurrency } from "../../utils";
import { useNearScreen } from "../../hooks/useNearScreen";
import { ReactComponent as Btc } from "../../assets/icons/bitcoin-currency.svg";

function Record({ record, setCounter }) {
  const [loadMore, element] = useNearScreen();

  useEffect(() => {
    if (loadMore) {
      setCounter((prevState) => prevState + 1);
    }
  }, [loadMore]);
  return (
    <Card ref={element} to={`/transaction/${record.id}`}>
      <TypeOfTransaction>{record.typeOfActivity}</TypeOfTransaction>

      <Amount typeOfActivity={record.typeOfActivity}>
        {record.typeOfActivity === "retiro" && "-"}
        {record.currency ? (
          formatterCurrency("es-CO", record.currency.currency).format(
            record.amount
          )
        ) : record.bought > 1 ? (
          formatterCurrency("es-CO", "COP").format(record.bought)
        ) : (
          <Icon fill="green">
            <Btc />
            {record.bought}
          </Icon>
        )}
      </Amount>
      <DateOfTransaction>
        {formatDateFromString(record.created_at)}
      </DateOfTransaction>

      <AmountSent>
        {record.typeOfActivity === "intercambio" && (
          <>
            -
            {record.currency ? (
              formatterCurrency("es-CO", record.currency.currency).format(
                record.amount
              )
            ) : record.spent > 1 ? (
              formatterCurrency("es-CO", "COP").format(record.spent)
            ) : (
              <Icon fill="red">
                <Btc />
                {record.spent}
              </Icon>
            )}
          </>
        )}
      </AmountSent>
      <State>{record.state ? "Aceptado" : "Rechazado"}</State>
      <LinkDetail to={`/transaction/${record.id}`}>Ver detalle</LinkDetail>
    </Card>
  );
}

export default Record;
