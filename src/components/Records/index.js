import { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import { breakpoints } from "../../styles/theme";
import useMedia from "../../hooks/useMedia";
import { Title, List, EmptyList, RecordHead, Headers } from "./Records.styles";
import Record from "../Record/";
import Filter from "../FilterRecords";
import Spinner from "../Spinner";
import { RECORDS_HEADERS } from "../../constants";
import {
  setDeposits,
  setWithdraws,
  setSwaps,
  setLoading,
  setActivities,
} from "../../redux/activity/activity.actions";
import { fetchDeposits, fetchWithDraws, fetchSwaps } from "../../utils/api";

function Records({
  authToken,
  setDeposits,
  setWithdraws,
  setSwaps,
  setLoading,
  setActivities,
  deposits,
  withdraws,
  swaps,
  activities,
  loading,
}) {
  const [records, setRecords] = useState([]);
  const tablet = useMedia(breakpoints.tablet);
  const [counter, setCounter] = useState(1);
  const NUMBER_OF_ELEMENTS = 10;

  const handleError = (err) => {
    // TODO: Create a method to handle error
    console.log(err);
    return;
  };
  const fetchRecords = async () => {
    await fetchDeposits(authToken).then((data) => setDeposits(data));
    await fetchWithDraws(authToken).then((data) => setWithdraws(data));
    await fetchSwaps(authToken).then((data) => setSwaps(data));
    setActivities();

    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);

    if (authToken) {
      fetchRecords();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken]);

  useMemo(() => {
    setRecords(activities);
  }, [activities]);

  return (
    <div>
      <Title>Actividad Reciente</Title>
      <Filter setRecords={setRecords} />
      {tablet && (
        <Headers>
          {" "}
          {RECORDS_HEADERS.map((header) => (
            <RecordHead>{header}</RecordHead>
          ))}
        </Headers>
      )}

      {records !== undefined && authToken && records?.length > 0 ? (
        <List>
          {records
            .flat()
            .slice(1, NUMBER_OF_ELEMENTS + counter)
            .map((record) => {
              if (record) {
                return (
                  <Record
                    setCounter={setCounter}
                    key={record.id}
                    record={record}
                  />
                );
              }
              return <></>;
            })}
        </List>
      ) : loading ? (
        <Spinner />
      ) : (
        <EmptyList>No hay registro de actividad</EmptyList>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  deposits: state.activity.deposits,
  withdraws: state.activity.withdraws,
  swaps: state.activity.swaps,
  authToken: state.activity.authToken,
  loading: state.activity.loading,
  activities: state.activity.activities,
});

const mapDispatchToProps = (dispatch) => ({
  setDeposits: (deposits) => dispatch(setDeposits(deposits)),
  setWithdraws: (withdraws) => dispatch(setWithdraws(withdraws)),
  setSwaps: (swaps) => dispatch(setSwaps(swaps)),
  setActivities: () => dispatch(setActivities()),
  setLoading: (flag) => dispatch(setLoading(flag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Records);
