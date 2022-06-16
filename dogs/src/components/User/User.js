import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Feed from "../Feed/Feed";
import Head from "../Helper/Head";
import NotFound from "../Helper/NotFound";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section className="container">
      <Head title="My Account" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="statistics" element={<UserStats />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </section>
  );
};

export default User;
