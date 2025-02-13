import { Router } from "express";
import {
  deleteProfile,
  editUserInfo,
  getAllUser,
  getProfile,
  loginUser,
  registerUser,
} from "../controllers/user.controllers";
const userRoute = Router();

userRoute
  .post("/register", registerUser)
  .post("/profile", getProfile)
  .post("/login", loginUser)
  .put("/edit", editUserInfo)
  .put("/delete", deleteProfile)
  .get("/all", getAllUser);

export { userRoute };
