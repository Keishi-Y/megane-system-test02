import React, { useState, useEffect } from "react";
import Chart from "./Chart";
import SortButton from "../functions/SortButton";
import FilterForm from "../functions/FilterForm";

export default function ChartList({ charts, refreshCharts }) {
  const [arrangeList, setArrangeList] = useState(charts);
  const [isArrangedAscend, setArrangedAscend] = useState(false);
  const [isArrangedDescend, setArrangedDescend] = useState(false);

  useEffect(() => {
    let unmount = false;
    if (!unmount) {
      const arranged = [...charts].sort((a, b) => {
        if (a.sort_id > b.sort_id) {
          return -1;
        } else {
          return 1;
        }
      });
      setArrangeList(arranged);
      setArrangedDescend(true);
    }
    return () => {
      unmount = true;
    };
  }, [charts]);

  const handleSortAscend = (list = [...arrangeList]) => {
    const arranged = list.sort((a, b) => {
      if (a.sort_id < b.sort_id) {
        return -1;
      } else {
        return 1;
      }
    });
    setArrangeList(arranged);
    setArrangedDescend(false);
    setArrangedAscend(true);
  };

  const handleSortDsecend = (list = [...arrangeList]) => {
    const arranged = list.sort((a, b) => {
      if (a.sort_id > b.sort_id) {
        return -1;
      } else {
        return 1;
      }
    });
    setArrangeList(arranged);
    setArrangedDescend(true);
    setArrangedAscend(false);
  };

  const handleFilterList = (e) => {
    let filterd = [...charts];
    filterd = filterd.filter((item) => {
      if (item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1) {
        return true;
      }
      if (item.id.toLowerCase().search(e.target.value.toLowerCase()) !== -1) {
        return true;
      }
    });
    if (isArrangedAscend) {
      handleSortAscend(filterd);
    }
    if (isArrangedDescend) {
      handleSortDsecend(filterd);
    }
    setArrangeList(filterd);
  };

  return (
    <div>
      <h2 className="mt-5 mb-3">カルテ一覧</h2>
      <SortButton
        handleSortDescend={handleSortDsecend}
        handleSortAscend={handleSortAscend}
      />
      <FilterForm
        handleFilterList={handleFilterList}
        searchTitle={"名前or顧客ID検索："}
      />
      <div className="list-group">
        {arrangeList.map((chart) => (
          <Chart chart={chart} key={chart.id} refreshCharts={refreshCharts} />
        ))}
      </div>
    </div>
  );
}
