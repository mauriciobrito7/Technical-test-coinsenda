import { useState } from "react";
import { FilterContainer, Btn } from "./Filter.styles";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrowUp.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrowDown.svg";
import { ReactComponent as Exchange } from "../../assets/icons/exchange.svg";

function Filter() {
  const [filterSelected, setFilterSelected] = useState("all");

  const isSelected = (option) => {
    if (option === filterSelected) {
      return true;
    }
    return false;
  };

  const selectFilter = (option) => {
    setFilterSelected(option);
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

export default Filter;
