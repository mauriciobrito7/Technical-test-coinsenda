import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { breakpoints } from "../../styles/theme";
import useMedia from "../../hooks/useMedia";
import { Title, List, EmptyList, RecordHead, Headers } from "./Records.styles";
import Record from "../Record/";
import Filter from "../FilterRecords";
import {
  USER_ID,
  DEPOSIT_URL,
  WITHDRAW_URL,
  SWAP_URL,
  RECORDS_HEADERS,
} from "../../constants";
import {
  fetchDeposits,
  fetchWithdraws,
  fetchSwaps,
  setLoading,
} from "../../redux/activity/activity.actions";

function Records() {
  const [records, setRecords] = useState([]);
  const [authToken, setAuthToken] = useState(
    "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOiI2MGIxZGE4NzA5ODI2ODAwNjRiMWJmMDQiLCJhdXRoX2NsaWVudF9pZCI6IjYwNjdmNWE5YmRkNzJkMDBkMTA3NjM2NSIsImlzcyI6IjYwNjdmNThlYmRkNzJkMDBkMTA3NjM1YSIsImF1ZCI6InRyYW5zYWN0aW9uLGlkZW50aXR5LGF1dGgsbm90aWZpY2F0aW9uLGluZm8sdHJhbnNhY3Rpb24sYWNjb3VudCxkZXBvc2l0LHdpdGhkcmF3LHN3YXAiLCJlbWFpbCI6InNvcG9ydGUrX3Rlc3RpbmdAY29pbnNlbmRhLmNvbSIsImxhbmd1YWdlIjoiZXMiLCJtZXRhZGF0YSI6Int9IiwianRpIjoiNjBjMzhlZmNmYWRhYmMwMDY0Mjc1NTViIiwiaWF0IjoxNjIzNDI4ODYwLCJleHAiOjkwMDAxNjIzNDI4ODYwfQ.cMpsIcBY1PO6bsBw0DKqIKC2xpUd389IxJ1RRmO7JuQO6OFSMQKwofKhsQ6C5mHtkfvtRsuHPeqmxqhj2-ZDMA"
  );
  const tablet = useMedia(breakpoints.tablet);
  const [counter, setCounter] = useState(1);
  const NUMBER_OF_ELEMENTS = 10;

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

      const orderedWithdraws = withdraws.sort(function (a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      const orderedDeposits = deposits.sort(function (a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      const orderedSwaps = swaps.sort(function (a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      const arrayMerge = orderedWithdraws
        .concat(orderedDeposits)
        .concat(orderedSwaps);
      const arrayMergeOrdered = arrayMerge.sort(function (a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      });

      console.log(arrayMergeOrdered);
      setRecords(arrayMergeOrdered);
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
      <Title>Actividad Reciente</Title>
      <Filter />
      {tablet && (
        <Headers>
          {" "}
          {RECORDS_HEADERS.map((header) => (
            <RecordHead>{header}</RecordHead>
          ))}
        </Headers>
      )}
      {records.length > 0 ? (
        <List>
          {records.slice(1, NUMBER_OF_ELEMENTS + counter).map((record) => (
            <Record setCounter={setCounter} key={record.id} record={record} />
          ))}
        </List>
      ) : (
        <EmptyList>No hay registro de actividad</EmptyList>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  deposits: state.deposits,
  withdraws: state.withdraws,
  swaps: state.swaps,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDeposits: () => dispatch(fetchDeposits()),
  fetchWithdraws: () => dispatch(fetchWithdraws()),
  fetchSwaps: () => dispatch(fetchSwaps()),
  setLoading: (flag) => dispatch(setLoading(flag)),
});

export default Records;
