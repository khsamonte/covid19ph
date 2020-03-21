import React from "react";
import styled from "styled-components";

import { covidData } from "../../data/covidData";

const DataPeriods = ({ activeMonth, setActiveMonth }) => {
  const handleMonthClick = e => {
    setActiveMonth(e.target.value);
  };

  return (
    <Container>
      {covidData.reverse().map(val => (
        <Button
          key={val.month}
          className={val.month === activeMonth && "active"}
          onClick={handleMonthClick}
          value={val.month}
        >
          {val.month}
        </Button>
      ))}
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  justify-content: flex-start;
  margin-top: 3.2rem;
`;

const Button = styled.button`
  background: none;
  border: 0.1rem solid #e9e9e9;
  border-radius: 0.3rem;
  color: #fff;
  cursor: pointer;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.4rem;
  height: 3.3rem;
  line-height: 1.7rem;
  margin-right: 1.6rem;
  width: 13rem;

  :focus {
    outline: 0;
  }

  &.active {
    background: #dfe6fe;
    border: 0.1rem solid #dfe6fe;
    color: #696a72;
  }
`;

export default DataPeriods;
