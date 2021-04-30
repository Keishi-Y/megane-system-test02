import React from "react";

export default function Chart({ chart, refreshCharts }) {
  // const formatted_birthday = record.birthday.replace(/-/g, " / ");

  const deleteChart = async () => {
    try {
      await fetch("/api/charts", {
        method: "DELETE",
        body: JSON.stringify({ id: chart.id }),
      });
      refreshCharts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="list-group-item mt-3">
      <span className="d-block mt-4">最終更新日時：{chart.updateDate}</span>
      <h4 className="list-group-item-heading mt-4 mb-4">
        No.{chart.sort_id}　お名前：{chart.name}
      </h4>
      <p className="list-group-item-heading">顧客ID：{chart.id}</p>
      <p className="list-group-item-heading">生年月日：{chart.birthday}</p>
      <p className="list-group-item-heading">電話番号：{chart.tel}</p>
      <p className="list-group-item-heading">メールアドレス：{chart.email}</p>
      <p className="list-group-item-heading">住所：{chart.address}</p>
      <p className="list-group-item-heading">初回来店日：{chart.firstVisit}</p>
      <p className="list-group-item-heading">最終来店日：{chart.lastVisit}</p>
      <button className="btn btn-sm btn-danger ml-2" onClick={deleteChart}>
        削除
      </button>
    </div>
  );
}
