import React, { useEffect, useState } from "react";
import RecordList from "../components/RecordList";
import RecordForm from "../components/RecordForm";

const ClinicRecords = () => {
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
    <div>
      <h1 className="mb-5 text-center">カルテ編集</h1>
      <div className="container mt-5 mb-5">
        <RecordForm recordAdded={loadRecords} />
        <RecordList records={records} refreshRecords={loadRecords} />
      </div>
    </div>
  );
};

export default ClinicRecords;
