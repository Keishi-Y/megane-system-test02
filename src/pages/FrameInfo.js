import React, { useEffect, useState } from "react";
import FrameList from "../components/tableData/frame/FrameList";
import { Link } from "react-router-dom";

const FrameInfo = () => {
  const [frames, setFrames] = useState([]);

  const loadFrames = async (mountState) => {
    try {
      const res = await fetch("/api/frames");
      const frames = await res.json();
      if (!mountState) {
        setFrames(frames);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let unmount = false;
    loadFrames(unmount);
    return () => {
      unmount = true;
    };
  }, []);

  return (
    <div>
      <h1 className="mb-5 text-center">フレーム情報一覧</h1>
      <div className="container mt-5 mb-5">
        <Link to="/create-frame-info" className="btn-dark btn">
          フレーム情報 新規追加画面に進む
        </Link>
        <FrameList frames={frames} refreshFrames={loadFrames} />
      </div>
    </div>
  );
};

export default FrameInfo;
