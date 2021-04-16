import React, { useEffect, useState } from "react";
import "./App.css";
import RecordList from "./components/RecordList";
import RecordForm from "./components/RecordForm";

function App() {
  const [records, setCourses] = useState([]);

  const loadRecords = async () => {
    try {
      const res = await fetch("/api/records");
      const records = await res.json();
      setCourses(records);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadRecords();
  }, []);
  return (
    <div className="container mt-5 mb-5">
      <h1 className="mb-5 text-center">眼鏡システム</h1>
      <RecordForm recordAdded={loadRecords} />
      <RecordList records={records} refreshRecords={loadRecords} />
    </div>
  );
}

export default App;
