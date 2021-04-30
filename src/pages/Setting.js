import React from "react";
import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-5 text-center">アプリ設定</h1>

      <div className="card">
        <h2 className="text-center card-header">設定一覧</h2>
        <ul className="list-group">
          <li className="list-group-item list-group-item-action">設定項目1</li>
          <li className="list-group-item list-group-item-action">設定項目2</li>
          <li className="list-group-item list-group-item-action">設定項目3</li>
          <li className="list-group-item list-group-item-action">設定項目4</li>
          <li className="list-group-item list-group-item-action">
            <Link to="/account-info">アカウント情報</Link>
          </li>
          <li className="list-group-item list-group-item-action">
            <Link to="/app-info" className="mb-5">
              アプリ情報
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Setting;
