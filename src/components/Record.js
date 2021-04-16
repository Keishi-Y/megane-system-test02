import React from "react";

export default function Record({ record, refreshRecords }) {
  // const formatted_birthday = record.birthday.replace(/-/g, " / ");

  const deleteRecord = async () => {
    try {
      await fetch("/api/records", {
        method: "DELETE",
        body: JSON.stringify({ id: record.id }),
      });
      refreshRecords();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="list-group-item">
      <h4 className="list-group-item-heading mt-4 mb-4">
        お名前：{record.name}
      </h4>
      <p className="list-group-item-heading">生年月日：{record.birthday}</p>
      <p className="list-group-item-heading">電話番号：{record.tel}</p>
      <p className="list-group-item-heading">メールアドレス：{record.email}</p>
      <p className="list-group-item-heading">住所：{record.address}</p>
      <p className="list-group-item-heading">初回来店日：{record.firstVisit}</p>
      <p className="list-group-item-heading">最終来店日：{record.lastVisit}</p>
      <button className="btn btn-sm btn-danger ml-2" onClick={deleteRecord}>
        削除
      </button>
    </div>
  );
}
