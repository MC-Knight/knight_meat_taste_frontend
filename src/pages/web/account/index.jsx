import { Routes, Route } from "react-router-dom";

import Login from "./login";
import Register from "./register";
import ForgotPassword from "./forgot_password";
// import VerifyEmail from "./verify_email";
import ResetPassword from "./reset_password";

function Account() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/forgot-password" exact element={<ForgotPassword />} />
      {/* <Route path="/verify-email/:id/:token" exact element={<VerifyEmail />} /> */}
      <Route path="/reset-password/:token" exact element={<ResetPassword />} />
    </Routes>
  );
}

export default Account;
