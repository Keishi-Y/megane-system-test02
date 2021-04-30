import React, { useEffect, useState } from "react";
import ChartForm from "../components/tableData/chart/ChartForm";
import { Link } from "react-router-dom";

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
      <h1 className="mb-5 text-center">カルテ新規追加</h1>
      <Link to="/clinic-charts" className="btn-dark btn">
        カルテ一覧に戻る
      </Link>
      <div className="container mt-5 mb-5">
        <ChartForm chartAdded={loadCharts} />
      </div>
    </div>
  );
};

export default ClinicCharts;
