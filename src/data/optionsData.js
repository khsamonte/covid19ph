export const titleOptions = {
  textStyle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 400
  }
};

export const gridOptions = {
  left: "0%",
  right: "2%",
  bottom: "0%",
  top: "15%",
  containLabel: true
};

export const xAxisOptions = {
  type: "category",
  boundaryGap: false,
  axisLine: {
    show: true,
    onZero: true,
    lineStyle: {
      color: "#E0E7FF",
      width: 1,
      type: "solid"
    }
  },
  axisTick: {
    show: false
  },
  axisLabel: {
    color: "#97A4BA",
    fontWeight: 400,
    fontSize: 14,
    fontFamily: "Helvetica, Arial, sans-serif"
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: "#8097b1",
      width: 1,
      type: "dashed",
      opacity: "0.3"
    }
  }
};

export const yAxisOptions = {
  type: "value",
  splitNumber: 8,
  min: 0,
  minInterval: 1,
  axisLine: {
    show: true,
    onZero: true,
    lineStyle: {
      color: "#E0E7FF",
      width: 1,
      type: "solid"
    }
  },
  axisTick: {
    show: false
  },
  axisLabel: {
    color: "#97A4BA",
    fontWeight: 400,
    fontSize: 14,
    fontFamily: "Helvetica, Arial, sans-serif"
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: "#8097B1",
      width: 1,
      type: "dashed",
      opacity: 0.3
    }
  }
};
