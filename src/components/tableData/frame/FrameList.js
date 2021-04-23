import React from "react";
import Frame from "./Frame";

export default function FrameList({ frames, refreshFrames }) {
  return (
    <div>
      <h2 className="mt-5 mb-3">フレーム情報一覧</h2>
      <div className="list-group">
        {frames.map((frame) => (
          <Frame frame={frame} key={frame.id} refreshFrames={refreshFrames} />
        ))}
      </div>
    </div>
  );
}
