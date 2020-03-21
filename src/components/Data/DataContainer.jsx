import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import DataChart from "./DataChart";
import DataPeriods from "./DataPeriods";

// Data
import { covidData } from "../../data/covidData";

const DataContainer = () => {
  const [activeMonth, setActiveMonth] = useState("March");
  const [casesData, setCasesData] = useState(null);

  useEffect(() => {
    const data = covidData.find(covidMonth => covidMonth.month === activeMonth);
    setCasesData(data);
  }, [activeMonth]);

  return (
    <Container className="data-container">
      <DataChart casesData={casesData} />
      <DataPeriods activeMonth={activeMonth} setActiveMonth={setActiveMonth} />
    </Container>
  );
};

const Container = styled.div`
  background: #283040;
  border: 0.1rem solid #283040;
  border-radius: 0.4rem;
  padding: 2.4rem;
  width: 100%;
`;

export default DataContainer;
