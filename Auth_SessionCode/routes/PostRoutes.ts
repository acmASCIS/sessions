import express from "express";
import requireLogin from "../middlewares/requireLogin";
import createPost from "../controller/PostController";
const PostRoutes = express.Router();

PostRoutes.post("/create").use(requireLogin, createPost);

export default PostRoutes;
