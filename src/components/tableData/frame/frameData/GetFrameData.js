import React, { useEffect, useState } from "react";

const FrameData = () => {
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
    loadFrames();
    return () => {
      unmount = true;
    };
  }, []);

  return frames;
};

export default FrameData;
