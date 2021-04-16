import React from "react";

const Home = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center mb-5">HOME</h1>

      <div>
        <p>
          アプリのホーム画面です。カルテ編集画面にアクセスするためにはログインが必要です。
        </p>
        <p>
          ログインせずに左側ナビゲーションバーの「カルテ情報」「アカウント情報」をクリックすると、ログイン画面(Auth0)にリダイレクトされます。
        </p>
        <p>初回アクセス時はサインアップをしてください。</p>
      </div>
    </div>
  );
};

export default Home;
