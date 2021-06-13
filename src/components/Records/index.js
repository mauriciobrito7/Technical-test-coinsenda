import { useEffect, useState } from "react";
import { List, EmptyList } from "./Records.styles";
import Record from "../Record/";
import { USER_ID, DEPOSIT_URL, WITHDRAW_URL, SWAP_URL } from "../../const";

function Records() {
  const [records, setRecords] = useState([]);
  const [authToken, setAuthToken] = useState(
    "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOiI2MGIxZGE4NzA5ODI2ODAwNjRiMWJmMDQiLCJhdXRoX2NsaWVudF9pZCI6IjYwNjdmNWE5YmRkNzJkMDBkMTA3NjM2NSIsImlzcyI6IjYwNjdmNThlYmRkNzJkMDBkMTA3NjM1YSIsImF1ZCI6InRyYW5zYWN0aW9uLGlkZW50aXR5LGF1dGgsbm90aWZpY2F0aW9uLGluZm8sdHJhbnNhY3Rpb24sYWNjb3VudCxkZXBvc2l0LHdpdGhkcmF3LHN3YXAiLCJlbWFpbCI6InNvcG9ydGUrX3Rlc3RpbmdAY29pbnNlbmRhLmNvbSIsImxhbmd1YWdlIjoiZXMiLCJtZXRhZGF0YSI6Int9IiwianRpIjoiNjBjMzhlZmNmYWRhYmMwMDY0Mjc1NTViIiwiaWF0IjoxNjIzNDI4ODYwLCJleHAiOjkwMDAxNjIzNDI4ODYwfQ.cMpsIcBY1PO6bsBw0DKqIKC2xpUd389IxJ1RRmO7JuQO6OFSMQKwofKhsQ6C5mHtkfvtRsuHPeqmxqhj2-ZDMA"
  );

  const handleError = (err) => {
    // TODO: Create a method to handle error
    console.log(err);
    return;
  };
  const fetchRecords = async (url) => {
    try {
      const withdraws = await fetch(
        `${WITHDRAW_URL}users/${USER_ID}/withdraws`,
        {
          method: `GET`,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => data);

      const deposits = await fetch(`${DEPOSIT_URL}users/${USER_ID}/deposits`, {
        method: `GET`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => data);

      const swaps = await fetch(`${SWAP_URL}users/${USER_ID}/swaps`, {
        method: `GET`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => data);
      setRecords(withdraws);
      console.log(withdraws);
      console.log(deposits);
      console.log(swaps);
    } catch (_) {
      return handleError(_);
    }
  };

  useEffect(() => {
    if (authToken.length > 0) {
      fetchRecords();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken]);

  return (
    <div>
      <h2>Actividad Reciente</h2>
      {records.length > 0 ? (
        <List>
          {records.map((record) => (
            <Record key={record.id}>{record.amount}</Record>
          ))}
        </List>
      ) : (
        <EmptyList>No records to display</EmptyList>
      )}
    </div>
  );
}

export default Records;
