import React, { useEffect, useState } from "react";
import ChartList from "../components/tableData/chart/ChartList";
import ChartForm from "../components/tableData/chart/ChartForm";

const ClinicCharts = () => {
  const [charts, setCharts] = useState([]);

  const loadCharts = async () => {
    try {
      const res = await fetch("/api/charts");
      const charts = await res.json();
      setCharts(charts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadCharts();
  }, []);

  return (
    <div>
      <h1 className="mb-5 text-center">カルテ編集</h1>
      <div className="container mt-5 mb-5">
        <ChartForm chartAdded={loadCharts} />
        <ChartList charts={charts} refreshCharts={loadCharts} />
      </div>
    </div>
  );
};

export default ClinicCharts;
