import React from "react";
import { Link } from "react-router-dom";

const AppInfo = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-5 text-center">アプリ情報</h1>
      <Link to="/setting" className="mb-5 btn btn-dark">
        設定一覧に戻る
      </Link>
      <div className="card">
        <h2 className="text-center card-header">更新履歴</h2>
        <ul className="list-group">
          <li className="list-group-item">
            2021/04/16　ログイン機能/アカウント情報画面/アプリ情報画面を実装しました。
          </li>
          <li className="list-group-item">
            2021/04/15　アプリを作成しました。
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppInfo;
