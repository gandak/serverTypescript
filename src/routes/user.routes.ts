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
  .post("/signup", registerUser)
  .post("/profile", getProfile)
  .post("/login", loginUser)
  .put("/edit", editUserInfo)
  .get("/all", getAllUser)
  .delete("/delete", deleteProfile);

export { userRoute };
