import styled from "styled-components";

export default function FilterContainer() {
  return (
    <FilterBox>
      <span>All</span>
      <span>Active</span>
      <span>Completed</span>
    </FilterBox>
  );
}

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

  & :hover {
    color: rgba(58, 124, 253, 1);
  }
`;
