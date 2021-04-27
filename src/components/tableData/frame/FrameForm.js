import React, { useState } from "react";
import Tags from "../tag/Tags";
import selectList from "../selectList/SelectList.json";

export default function FrameForm({ frameAdded }) {
  const [frameName, setFrameName] = useState("");
  const [productNumber, setProductNumber] = useState("");
  const [priceTaxExcluded, setPriceTaxExcluded] = useState("");
  const [targetGender, setTargetGender] = useState([]);
  const [frameType, setFrameType] = useState([]);
  const [series, setSeries] = useState([]);
  const [category, setCategory] = useState([]);
  // const [description, setDescription] = useState("");
  // const [keywords, setKeywords] = useState("");
  // const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [nosePad, setNosePad] = useState([]);
  const [materialFront, setMaterialFront] = useState([]);
  const [materialTemple, setMaterialTemple] = useState([]);
  const [color, setColor] = useState([]);

  const [count, setCount] = useState(0);

  const resetFrameForm = () => {
    setFrameName("");
    setProductNumber("");
    setPriceTaxExcluded("");
    setTargetGender("");
    setFrameType("");
    setSeries("");
    setCategory("");
    // setDescription("");
    // setKeywords("");
    // setSize("");
    setWeight("");
    setNosePad("");
    setMaterialFront("");
    setMaterialTemple("");
    setColor("");
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
          targetGender,
          frameType,
          series,
          category,
          // description,
          // keywords,
          // size,
          weight,
          nosePad,
          materialFront,
          materialTemple,
          color,
        }),
      });
      resetFrameForm();
      frameAdded();
    } catch (err) {
      console.error(err);
      window.alert("投稿エラーです");
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
              type="text"
              name="priceTaxExcluded"
              value={priceTaxExcluded}
              className="form-control"
              onChange={(e) => setPriceTaxExcluded(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="targetGender">性別</label>
            <select
              onChange={(e) => setTargetGender(e.target.value)}
              className="form-control"
              name="targetGender"
            >
              {selectList.targetGenderList.map((targetGender, index) => (
                <option value={targetGender} key={index}>
                  {targetGender}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="frameType">フレームタイプ</label>
            <select
              onChange={(e) => setFrameType(e.target.value)}
              className="form-control"
              name="frameType"
            >
              {selectList.frameTypeList.map((frameType, index) => (
                <option value={frameType} key={index}>
                  {frameType}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="series">シリーズ</label>
            <select
              onChange={(e) => setSeries(e.target.value)}
              className="form-control"
              name="series"
            >
              {selectList.seriesList.map((series, index) => (
                <option value={series} key={index}>
                  {series}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">カテゴリー</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="form-control"
              name="category"
            >
              {selectList.categoryList.map((category, index) => (
                <option value={category} key={index}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="form-group">
            <label htmlFor="description">商品説明</label>
            <input
              type="text"
              name="description"
              value={description}
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div> */}
          {/* <div className="form-group">
            <label htmlFor="keywords">キーワード</label>
            <input
              type="text"
              name="keywords"
              value={keywords}
              className="form-control"
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div> */}
          {/* <div className="form-group">
            <label htmlFor="size">サイズ</label>
            <input
              type="text"
              name="size"
              value={size}
              className="form-control"
              onChange={(e) => setSize(e.target.value)}
            />
          </div> */}
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
          <div className="form-group">
            <label htmlFor="targetNosePad">鼻パッドの形状</label>
            <select
              onChange={(e) => setNosePad(e.target.value)}
              className="form-control"
              name="nosePad"
            >
              {selectList.nosePadList.map((nosePad, index) => (
                <option value={nosePad} key={index}>
                  {nosePad}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="materialFront">フレーム素材（フロント）: </label>
            <Tags
              tagsUpdated={setMaterialFront}
              key={count}
              tagChoices={selectList.materialChoices}
            />
          </div>
          <div className="form-group">
            <label htmlFor="materialTemple">フレーム素材（テンプル）：</label>
            <Tags
              tagsUpdated={setMaterialTemple}
              key={count}
              tagChoices={selectList.materialChoices}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Color">カラー</label>
            <select
              onChange={(e) => setColor(e.target.value)}
              className="form-control"
              name="color"
            >
              {selectList.colorList.map((color, index) => (
                <option value={color} key={index}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            追加する
          </button>
        </form>
      </div>
    </div>
  );
}
