import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserProfileAvatar } from "../components/user/UserProfileAvatar";

const AccountInfo = () => {
  const { user } = useAuth0();

  return (
    <div className="container mt-5">
      <h1 className=" mb-5 text-center">アカウント情報</h1>
      <div className="card mt-5 pb-5 pt-5">
        <div className="card-body w-50 mx-auto d-flex justify-content-center flex-column">
          <UserProfileAvatar
            style={{ width: "100px" }}
            className="mb-5 mx-auto"
          />
          <div className="mb-5">
            <h5>名前</h5>
            <div>{user.name}</div>
          </div>

          <div className="mb-5">
            <h5>ニックネーム</h5>
            <div>{user.nickname}</div>
          </div>
          {/* <h2>picture</h2>
      <div>{user.picture}</div> */}
          <div>
            <h5>メールアドレス</h5>
            <div>{user.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
