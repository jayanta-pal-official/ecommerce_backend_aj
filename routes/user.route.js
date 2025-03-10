import express from "express";
const router = express.Router();

// imports
import asyncWrapper from "../utils/asyncWrapper.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { validateData } from "../middleware/schemaValidation.js";
import { userCreationSchema, userUpdateSchema } from "../schemas/userSchema.js";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";
import { uploader } from "../middleware/uploadImage.js";

router.post("/create", uploader.single("image"), asyncWrapper(createUser));
router.post("/upload-image", uploader.single("image"), asyncWrapper());
router.get("/:id", asyncWrapper(getUser));
router.put("/:id", uploader.single("image"), asyncWrapper(updateUser));
router.delete("/:id", asyncWrapper(deleteUser));

export default router;
