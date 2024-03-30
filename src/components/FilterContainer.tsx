import styled from "styled-components";
import { useState } from "react";

export default function FilterContainer({ setFilter, filter }) {
  return (
    <FilterBox>
      <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
        All
      </FilterButton>
      <FilterButton
        active={filter === "active"}
        onClick={() => setFilter("active")}>
        Active
      </FilterButton>
      <FilterButton
        active={filter === "completed"}
        onClick={() => setFilter("completed")}>
        Completed
      </FilterButton>
    </FilterBox>
  );
}

const FilterButton = styled.span`
  color: ${(props) => (props.active ? "rgba(58, 124, 253, 1)" : "inherit")};
`;

const FilterBox = styled.div`
  display: flex;
  gap: 19px;
  color: rgba(91, 94, 126, 1);
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -0.1944444477558136px;

  padding: 15px 80px;
  background-color: rgba(37, 39, 61, 1);
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
  margin-top: -16px;
`;
