import React, { useState } from "react";

export default function RecordForm({ recordAdded }) {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [firstVisit, setFirstVisit] = useState("");
  const [lastVisit, setLastVisit] = useState("");

  const resetForm = () => {
    setName("");
    setBirthday("");
    setTel("");
    setEmail("");
    setAddress("");
    setFirstVisit("");
    setLastVisit("");
  };

  const submitRecord = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/records", {
        method: "POST",
        body: JSON.stringify({
          name,
          birthday,
          tel,
          email,
          address,
          firstVisit,
          lastVisit,
        }),
      });
      resetForm();
      recordAdded();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card">
      <div className="card-header">カルテを追加する</div>
      <div className="card-body">
        <form className="" onSubmit={submitRecord}>
          <div className="form-group">
            <label htmlFor="name">名前</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthday">生年月日</label>
            <input
              type="date"
              name="birthday"
              value={birthday}
              className="form-control"
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tel">電話番号</label>
            <input
              type="tel"
              name="tel"
              value={tel}
              className="form-control"
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tel">メールアドレス</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">住所</label>
            <input
              type="text"
              name="address"
              value={address}
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstVisit">初回来店日</label>
            <input
              type="date"
              name="firstVisit"
              value={firstVisit}
              className="form-control"
              onChange={(e) => setFirstVisit(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastVisit">最終来店日</label>
            <input
              type="date"
              name="lastVisit"
              value={lastVisit}
              className="form-control"
              onChange={(e) => setLastVisit(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            追加する
          </button>
        </form>
      </div>
    </div>
  );
}
