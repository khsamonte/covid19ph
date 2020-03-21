import React from "react";
import styled from "styled-components";
import ReactEcharts from "echarts-for-react";

// Data
import {
  titleOptions,
  gridOptions,
  xAxisOptions,
  yAxisOptions
} from "../../data/optionsData";

const DataChart = ({ casesData }) => {
  const getOptions = () => {
    const options = {
      title: {
        ...titleOptions,
        text: "Daily Rate of Confirmed COVID Cases"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        show: false
      },
      grid: gridOptions,
      xAxis: {
        ...xAxisOptions,
        data: casesData.days.map(day => ({
          value: day
        }))
      },
      yAxis: yAxisOptions,
      series: [
        {
          name: `Confirmed Cases`,
          type: "line",
          data: casesData.confirmed.map(val => ({
            value: val,
            symbolSize: 6,
            label: {
              color: "#fff"
            },
            itemStyle: {
              color: "#ffff32"
            }
          })),
          z: 10,
          lineStyle: {
            color: "#ffff32"
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(255,255,50, 0.3)"
                },
                {
                  offset: 1,
                  color: "rgba(255,255,50, 0)"
                }
              ]
            }
          }
        },
        {
          name: `Deaths`,
          type: "line",
          data: casesData.deaths.map(val => ({
            value: val,
            symbolSize: 6,
            label: {
              color: "#fff"
            },
            itemStyle: {
              color: "#F26964"
            }
          })),
          z: 20,
          lineStyle: {
            color: "#F26964"
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(242,105,100, 0.3)"
                },
                {
                  offset: 1,
                  color: "rgba(242,105,100, 0)"
                }
              ]
            }
          }
        },
        {
          name: `Recoveries`,
          type: "line",
          data: casesData.recoveries.map(val => ({
            value: val,
            symbolSize: 6,
            label: {
              color: "#fff"
            },
            itemStyle: {
              color: "#3A96FD"
            }
          })),
          z: 25,
          lineStyle: {
            color: "#3A96FD"
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(58,150,253, 0.3)"
                },
                {
                  offset: 1,
                  color: "rgba(58,150,253, 0)"
                }
              ]
            }
          }
        }
      ]
    };

    return options;
  };

  return (
    <Container className="data-chart">
      {casesData && (
        <ReactEcharts option={getOptions()} style={{ height: "450px" }} />
      )}
    </Container>
  );
};

const Container = styled.div``;

export default DataChart;
