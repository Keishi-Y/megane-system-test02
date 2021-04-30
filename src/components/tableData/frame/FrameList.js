import React, { useState, useEffect } from "react";
import Frame from "./Frame";
import SortButton from "../functions/SortButton";
import FilterForm from "../functions/FilterForm";

export default function FrameList({ frames, refreshFrames }) {
  const [arrangeList, setArrangeList] = useState(frames);
  const [isArrangedAscend, setArrangedAscend] = useState(false);
  const [isArrangedDescend, setArrangedDescend] = useState(false);

  useEffect(() => {
    let unmount = false;
    if (!unmount) {
      const arranged = [...frames].sort((a, b) => {
        if (a.sort_id > b.sort_id) {
          return -1;
        } else {
          return 1;
        }
      });
      setArrangeList(arranged);
      setArrangedDescend(true);
      // setArrangeList([...arranged]);
    }
    return () => {
      unmount = true;
    };
  }, [frames]);

  const handleSortAscend = (list = [...arrangeList]) => {
    // const arranged = [...frames].sort((a, b) => {
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
    // const arranged = [...frames].sort((a, b) => {
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
    // const filterd = [...frames].filter((item) => {
    let filterd = [...frames];

    filterd = filterd.filter((item) => {
      if (
        item.frameName.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      ) {
        return true;
      }
      if (
        item.productNumber
          .toLowerCase()
          .search(e.target.value.toLowerCase()) !== -1
      ) {
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
      <h2 className="mt-5 mb-3">フレーム情報一覧</h2>
      <SortButton
        handleSortDescend={handleSortDsecend}
        handleSortAscend={handleSortAscend}
      />
      <FilterForm
        handleFilterList={handleFilterList}
        searchTitle={"商品名or品番検索："}
      />
      <div className="list-group">
        {arrangeList.map((frame) => (
          <Frame frame={frame} key={frame.id} refreshFrames={refreshFrames} />
        ))}
      </div>
    </div>
  );
}
