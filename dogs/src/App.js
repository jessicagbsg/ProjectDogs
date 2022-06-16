import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import { UserStorage } from "./UserContext";
import ProtectedRoute from "./components/Helper/ProtectedRoute";
import Photo from "./components/Photo/Photo";
import UserProfile from "./components/User/UserProfile";
import NotFound from "./components/Helper/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="login/*" element={<Login />}></Route>
              <Route
                path="account/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="foto/:id" element={<Photo />}></Route>
              <Route path="perfil/:user" element={<UserProfile />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
