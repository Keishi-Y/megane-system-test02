import React, { useState } from "react";
import Tags from "../tag/Tags";

export default function FrameForm({ frameAdded }) {
  const [frameName, setFrameName] = useState("");
  const [productNumber, setProductNumber] = useState("");
  const [priceTaxExcluded, setPriceTaxExcluded] = useState("");
  const [priceTax, setPriceTax] = useState("");
  // const [frameType, setFrameType] = useState([]);
  // const [series, setSeries] = useState([]);
  // const [category, setCategory] = useState([]);
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [targetCustomer, setTargetCustomer] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  // const [nosePad, setNosePad] = useState([]);
  const [materialFront, setMaterialFront] = useState([]);
  // const [materialTemple, setMaterialTemple] = useState([]);
  // const [color, setColor] = useState([]);
  const [count, setCount] = useState(0);

  const resetFrameForm = () => {
    setFrameName("");
    setProductNumber("");
    setPriceTaxExcluded("");
    setPriceTax("");
    // setFrameType("");
    // setSeries("");
    // setCategory("");
    setDescription("");
    setKeywords("");
    setTargetCustomer("");
    setSize("");
    setWeight("");
    // setNosePad("");
    // setMaterialFront("");
    // setMaterialTemple("");
    // setColor("");
    setCount(count + 1);
  };

  const submitFrame = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/frames", {
        method: "POST",
        body: JSON.stringify({
          frameName,
          productNumber,
          priceTaxExcluded,
          priceTax,
          // frameType,
          // series,
          // category,
          description,
          keywords,
          targetCustomer,
          size,
          weight,
          // nosePad,
          materialFront,
          // materialTemple,
          // color,
        }),
      });
      resetFrameForm();
      frameAdded();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card">
      <div className="card-header">フレーム情報を追加する</div>
      <div className="card-body">
        <form className="" onSubmit={submitFrame}>
          <div className="form-group">
            <label htmlFor="frameName">品名</label>
            <input
              type="text"
              name="frameName"
              value={frameName}
              className="form-control"
              onChange={(e) => setFrameName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productNumber">品番</label>
            <input
              type="text"
              name="productNumber"
              value={productNumber}
              className="form-control"
              onChange={(e) => setProductNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="priceTaxExcluded">価格（税抜）</label>
            <input
              type="number"
              name="priceTaxExcluded"
              value={priceTaxExcluded}
              className="form-control"
              onChange={(e) => setPriceTaxExcluded(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="priceTax">価格（税込）</label>
            <input
              type="number"
              name="priceTax"
              value={priceTax}
              className="form-control"
              onChange={(e) => setPriceTax(e.target.value)}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="frameType">フレームタイプ</label>
            <input
              type="text"
              name="frameType"
              value={frameType}
              className="form-control"
              onChange={(e) => setFrameType(e.target.value)}
            />
            <Tags tagsUpdated={setFrameType} key={count} />
          </div> */}
          {/* <div className="form-group">
            <label htmlFor="series">シリーズ</label>
            <input
              type="text"
              name="series"
              value={series}
              className="form-control"
              onChange={(e) => setSeries(e.target.value)}
            />
          </div> */}
          {/* <div className="form-group">
            <label htmlFor="cateory">カテゴリ</label>
            <input
              type="text"
              name="category"
              value={category}
              className="form-control"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="description">商品説明</label>
            <input
              type="text"
              name="description"
              value={description}
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="keywords">キーワード</label>
            <input
              type="text"
              name="keywords"
              value={keywords}
              className="form-control"
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="targetCustomer">ターゲット</label>
            <input
              type="text"
              name="targetCustomer"
              value={targetCustomer}
              className="form-control"
              onChange={(e) => setTargetCustomer(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="size">サイズ</label>
            <input
              type="text"
              name="size"
              value={size}
              className="form-control"
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">フレームの重量</label>
            <input
              type="text"
              name="weight"
              value={weight}
              className="form-control"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="targetNosePad">鼻パッドの形状</label>
            <input
              type="text"
              name="nosePad"
              value={nosePad}
              className="form-control"
              onChange={(e) => setNosePad(e.target.value)}
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="materialFront">フレーム素材（フロント）: </label>
            {/* <input
              type="text"
              name="materialFront"
              value={materialFront}
              className="form-control"
              onChange={(e) => setMaterialFront(e.target.value)}
            /> */}
            <Tags tagsUpdated={setMaterialFront} key={count} />
          </div>
          {/* <div className="form-group">
            <label htmlFor="materialTemple">フレーム素材（テンプル）</label>
            <input
              type="text"
              name="materialTemple"
              value={materialTemple}
              className="form-control"
              onChange={(e) => setMaterialTemple(e.target.value)}
            />
          </div> */}
          {/* <div className="form-group">
            <label htmlFor="Color">カラー</label>
            <input
              type="text"
              name="color"
              value={color}
              className="form-control"
              onChange={(e) => setColor(e.target.value)}
            />
          </div> */}
          <button type="submit" className="btn btn-primary">
            追加する
          </button>
        </form>
      </div>
    </div>
  );
}
