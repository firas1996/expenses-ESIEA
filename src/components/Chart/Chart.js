import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ expensesData }) => {
  const chartData = [
    { value: 0, label: "Jan" },
    { value: 0, label: "Fev" },
    { value: 0, label: "Mar" },
    { value: 0, label: "Avr" },
    { value: 0, label: "May" },
    { value: 0, label: "Jui" },
    { value: 0, label: "Jul" },
    { value: 0, label: "Aug" },
    { value: 0, label: "Sep" },
    { value: 0, label: "Oct" },
    { value: 0, label: "Nov" },
    { value: 0, label: "Dec" },
  ];
  for (const item of expensesData) {
    const expenseMonth = item.date.getMonth();
    chartData[expenseMonth].value += item.price;
  }
  const values = chartData.map((item) => item.value);
  const max = Math.max(...values);
  const total = values.reduce((a, b) => {
    return a + b;
  });
  return (
    <div className="chart">
      {chartData.map((element) => {
        return (
          <ChartBar
            label={element.label}
            value={element.value}
            max={max}
            total={total}
          />
        );
      })}
    </div>
  );
};

export default Chart;
