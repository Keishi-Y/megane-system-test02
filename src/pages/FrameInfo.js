import React, { useEffect, useState } from "react";
import FrameList from "../components/tableData/frame/FrameList";
import FrameForm from "../components/tableData/frame/FrameForm";

const FrameInfo = () => {
  const [frames, setFrames] = useState([]);

  const loadFrames = async () => {
    try {
      const res = await fetch("/api/frames");
      const frames = await res.json();
      setFrames(frames);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadFrames();
  }, []);

  return (
    <div>
      <h1 className="mb-5 text-center">フレーム情報編集</h1>
      <div className="container mt-5 mb-5">
        <FrameForm frameAdded={loadFrames} />
        <FrameList frames={frames} refreshFrames={loadFrames} />
      </div>
    </div>
  );
};

export default FrameInfo;
