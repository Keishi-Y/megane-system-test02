import React from "react";
import Record from "./Record";

export default function RecordList({ records, refreshRecords }) {
  return (
    <div>
      <h2 className="mt-5 mb-3">カルテ一覧</h2>
      <div className="list-group">
        {records.map((record) => (
          <Record
            record={record}
            key={record.id}
            refreshRecords={refreshRecords}
          />
        ))}
      </div>
    </div>
  );
}
