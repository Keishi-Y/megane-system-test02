import React from "react";

const AppInfo = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-5 text-center">アプリ情報</h1>

      <div className="card">
        <h2 className="mb-5 text-center card-header">更新履歴</h2>
        <ul>
          <li className="mb-5">
            2021/04/16　ログイン機能/アカウント情報画面/アプリ情報画面を実装しました。
          </li>
          <li className="mb-5">2021/04/15　アプリを作成しました。</li>
        </ul>
      </div>
    </div>
  );
};

export default AppInfo;
