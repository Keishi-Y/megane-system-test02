import React, { useEffect, useState } from "react";
import ChartList from "../components/tableData/chart/ChartList";
import { Link } from "react-router-dom";

const ClinicCharts = () => {
  const [charts, setCharts] = useState([]);

  const loadCharts = async (mountState) => {
    try {
      const res = await fetch("/api/charts");
      const charts = await res.json();
      if (!mountState) {
        setCharts(charts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let unmount = false;
    loadCharts(unmount);
    return () => {
      unmount = true;
    };
  }, []);

  return (
    <div>
      <h1 className="mb-5 text-center">カルテ編集</h1>
      <div className="container mt-5 mb-5">
        <Link to="/create-clinic-charts" className="btn-dark btn">
          カルテ 新規追加画面に進む
        </Link>
        <ChartList charts={charts} refreshCharts={loadCharts} />
      </div>
    </div>
  );
};

export default ClinicCharts;
