import styled from "styled-components";

type FilterProps = {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
};

type FilterButtonProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export default function FilterContainer({ setFilter, filter }: FilterProps) {
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

const FilterButton = styled.span<FilterButtonProps>`
  color: ${(props) =>
    props.active
      ? props.theme.filterActiveColor
      : props.theme.filterInactiveColor};

  &:hover {
    color: ${(props) => !props.active && props.theme.textHover};
  }
`;

const FilterBox = styled.div`
  display: flex;
  gap: 19px;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -0.1944444477558136px;

  padding: 15px 80px;
  background-color: ${(props) => props.theme.inputBackgroundColor};
  border-radius: 5px;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadow};

  @media (min-width: 1000px) {
    position: relative;
    box-shadow: none;
    background: none;
    bottom: 73px;
    padding: 0;
  }
`;
