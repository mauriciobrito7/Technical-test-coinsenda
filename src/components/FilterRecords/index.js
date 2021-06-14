import { useState } from "react";
import { FilterContainer, Btn } from "./Filter.styles";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrowUp.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrowDown.svg";
import { ReactComponent as Exchange } from "../../assets/icons/exchange.svg";
import { connect } from "react-redux";

function Filter({ deposits, withdraws, swaps, activities, setRecords }) {
  const [filterSelected, setFilterSelected] = useState("all");

  const isSelected = (option) => {
    if (option === filterSelected) {
      return true;
    }
    return false;
  };

  const selectFilter = (option) => {
    setFilterSelected(option);
    switch (option) {
      case "all":
        setRecords(activities);
        break;
      case "deposits":
        setRecords(deposits);
        break;
      case "withdraws":
        setRecords(withdraws);
        break;
      case "swaps":
        setRecords(swaps);
        break;
      default:
        break;
    }
  };

  return (
    <FilterContainer>
      <Btn onClick={() => selectFilter("all")} active={isSelected("all")}>
        Todas
      </Btn>
      <Btn
        onClick={() => selectFilter("deposits")}
        active={isSelected("deposits")}
      >
        <ArrowUp />
      </Btn>
      <Btn
        onClick={() => selectFilter("withdraws")}
        active={isSelected("withdraws")}
      >
        <ArrowDown />
      </Btn>
      <Btn onClick={() => selectFilter("swaps")} active={isSelected("swaps")}>
        <Exchange />
      </Btn>
    </FilterContainer>
  );
}

const mapStateToProps = (state) => ({
  deposits: state.activity.deposits,
  withdraws: state.activity.withdraws,
  swaps: state.activity.swaps,
  activities: state.activity.activities,
});
export default connect(mapStateToProps)(Filter);
