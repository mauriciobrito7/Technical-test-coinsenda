import React from "react";
import {
  Card,
  Headers,
  RecordHead,
  TypeOfTransaction,
  DateOfTransaction,
  Amount,
  Status,
  LinkDetail,
} from "./Record.styles";
import { RECORDS_HEADERS } from "../../constants/";
import { breakpoints } from "../../styles/theme";
import useMedia from "../../hooks/useMedia";
import { formatDateFromString } from "../../utils";

function Record({ record }) {
  const tablet = useMedia(breakpoints.tablet);
  return (
    <Card>
      {tablet && (
        <Headers>
          {" "}
          {RECORDS_HEADERS.map((header) => (
            <RecordHead>{header}</RecordHead>
          ))}
        </Headers>
      )}
      <TypeOfTransaction>Intercambio</TypeOfTransaction>
      <DateOfTransaction>
        {formatDateFromString(record.created_at)}
      </DateOfTransaction>
      <Amount>-{record.amount}</Amount>
      <Status>{record.state}</Status>
      <LinkDetail>Ver detalle</LinkDetail>
    </Card>
  );
}

export default Record;
