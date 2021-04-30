import React from "react";
import LoginButton from "../components/auth/LoginButton";
import LogoutButton from "../components/auth/LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <div className="mt-5">
          <h1 className="text-center mb-5">マイページ</h1>
          <div>
            <p>ログイン済の場合に表示されるアプリのホーム画面です。</p>
            <LogoutButton />
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Home;
