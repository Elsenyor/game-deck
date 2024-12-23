import express from "express";
import {
	loginUserController,
	newUserController,
	validateUserController,
	passwordRecoverController,
	resetPasswordController,
	editPasswordController,
	getOwnUserController,
	editUserController,
} from "../controllers/users/index.js";
import { authUserController } from "../middlewares/index.js";

const router = express.Router();

router.post("/api/users/register", newUserController);

router.post("/api/users/login", loginUserController);

router.get("/api/users", authUserController, getOwnUserController);

router.post("/api/users/password/recover", passwordRecoverController);

router.put("/api/users/validate/:registrationCode", validateUserController);

router.put("/api/users/password/reset/:recoverPassCode", resetPasswordController);

router.put("/api/users/password/change", authUserController, editPasswordController);

router.put("/api/users/edit", authUserController, editUserController);

export default router;
