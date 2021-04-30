import React from "react";
import LoginButton from "../components/auth/LoginButton";

console.log(window.location.origin + "/mypage");
const Home = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center mb-5">HOME</h1>

      <div>
        <p>
          未ログイン時に表示されるアプリのホーム画面です。編集画面にアクセスするためにはログインが必要です。
        </p>
        <p>
          ログインせずに左側ナビゲーションバーの「カルテ情報」「フレーム情報」をクリックすると、ログイン画面(Auth0)にリダイレクトされます。
        </p>
        <p>
          Auth0にて事前に登録されているアカウント(下記テスト用アカウント)のみログインできます。（本アプリからの新たなアカウント登録不可）
        </p>
        <p>
          ◆テスト用アカウント<br></br>
          アカウント名:megane<br></br>パスワード：megane_1234
        </p>
        <LoginButton />
      </div>
    </div>
  );
};

export default Home;
