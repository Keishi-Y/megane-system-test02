import React, { useEffect, useState } from "react";

const FrameData = () => {
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

  return frames;
};

export default FrameData;
