import React from "react";
import LogoutButton from "../components/auth/LogoutButton";

const MyPage = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center mb-5">マイページ</h1>

      <div>
        <p>ログイン済の場合に表示されるアプリのホーム画面です。</p>
        <LogoutButton />
      </div>
    </div>
  );
};

export default MyPage;
