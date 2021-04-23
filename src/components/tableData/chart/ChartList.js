import React from "react";
import Chart from "./Chart";

export default function ChartList({ charts, refreshCharts }) {
  return (
    <div>
      <h2 className="mt-5 mb-3">カルテ一覧</h2>
      <div className="list-group">
        {charts.map((chart) => (
          <Chart chart={chart} key={chart.id} refreshCharts={refreshCharts} />
        ))}
      </div>
    </div>
  );
}
