import React from "react";

export default function Frame({ frame, refreshFrames }) {
  // const formatted_birthday = record.birthday.replace(/-/g, " / ");

  const deleteFrame = async () => {
    try {
      await fetch("/api/frames", {
        method: "DELETE",
        body: JSON.stringify({ id: frame.id }),
      });
      refreshFrames();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="list-group-item">
      <h4 className="list-group-item-heading mt-4 mb-4">
        商品名：{frame.frameName}
      </h4>
      <p className="list-group-item-heading">品番：{frame.productNumber}</p>
      <p className="list-group-item-heading">
        価格（税抜）：￥ {parseInt(frame.priceTaxExcluded).toLocaleString()}
      </p>
      <p className="list-group-item-heading">
        価格（税込）：￥{" "}
        {parseInt(frame.priceTaxExcluded * 1.1).toLocaleString()}
      </p>
      <p className="list-group-item-heading">性別：{frame.targetGender}</p>
      <p className="list-group-item-heading">
        フレームタイプ：{frame.frameType}
      </p>
      <p className="list-group-item-heading">シリーズ：{frame.series}</p>
      <p className="list-group-item-heading">カテゴリ：{frame.category}</p>
      {/* <p className="list-group-item-heading">商品説明：{frame.description}</p> */}
      {/* <p className="list-group-item-heading">キーワード：{frame.keywords}</p> */}
      {/* <p className="list-group-item-heading">サイズ：{frame.size}</p> */}
      <p className="list-group-item-heading">フレームの重さ：{frame.weight}</p>
      <p className="list-group-item-heading">鼻パッドの形状：{frame.nosePad}</p>
      <p className="list-group-item-heading">
        フレーム素材（フロント）：{""}
        {frame.materialFront &&
          frame.materialFront.map((material, index) => (
            <span className="badge badge-primary mr-2" key={index}>
              {material}
            </span>
          ))}
      </p>
      <p className="list-group-item-heading">
        フレーム素材（テンプル）：{" "}
        {frame.materialTemple &&
          frame.materialTemple.map((material, index) => (
            <span className="badge badge-primary mr-2" key={index}>
              {material}
            </span>
          ))}
      </p>
      <p className="list-group-item-heading">カラー：{frame.color}</p>
      <button className="btn btn-sm btn-danger ml-2" onClick={deleteFrame}>
        削除
      </button>
    </div>
  );
}
