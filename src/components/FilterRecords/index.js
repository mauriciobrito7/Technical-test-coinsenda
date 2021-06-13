import React from "react";
import { FilterContainer, Btn } from "./Filter.styles";

function Filter() {
  return (
    <FilterContainer>
      <Btn active={true}>Todas</Btn>
      <Btn>Depositos</Btn>
      <Btn>Retiros</Btn>
      <Btn>Cambios</Btn>
    </FilterContainer>
  );
}

export default Filter;
