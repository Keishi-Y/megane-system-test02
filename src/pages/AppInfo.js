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
            <p>2021/04/30</p>
            <p>リストの並び替え機能を実装しました。</p>
            <p>リストの絞り込み機能を実装しました。</p>
          </li>
          <li className="list-group-item">
            <p>2021/04/23</p>
            <p>
              フレーム情報の表示（複数テーブルへのアクセス）ができるようになりました。
            </p>
            <p>ログイン前後でホームページの表示内容を変更しました。</p>
          </li>
          <li className="list-group-item">
            <p>2021/04/16</p>
            <p>
              ログイン機能/アカウント情報画面/アプリ情報画面を実装しました。
            </p>
          </li>
          <li className="list-group-item">
            <p>2021/04/15</p>
            <p>アプリを作成しました。</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppInfo;
