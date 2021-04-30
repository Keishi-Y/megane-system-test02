import React, { useEffect, useState } from "react";
import FrameForm from "../components/tableData/frame/FrameForm";
import { Link } from "react-router-dom";

const CreateFrameInfo = () => {
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
      <h1 className="mb-5 text-center">フレーム情報新規追加</h1>
      <Link to="/frame-info" className="btn-dark btn">
        フレーム情報一覧に戻る
      </Link>
      <div className="container mt-5 mb-5">
        <FrameForm frameAdded={loadFrames} />
      </div>
    </div>
  );
};

export default CreateFrameInfo;
