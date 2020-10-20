import { NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/Auth";

const requireLogin = (req: any, res: any, next: any) => {
  const { authrization } = req.headers;
  if (!authrization)
    return res.status(401).json({
      status: "failed",
      error: " Access denied",
    });
  const verifyToken = authrization.replace("Bearer ", "");
  jwt.verify(
    verifyToken,
    process.env.JWTSECRET || "",
    (err: any, payload: any) => {
      if (err)
        return res.status(401).json({
          status: "failed",
          error: " Access denied",
        });

      const { _id } = payload;
      User.findById(_id).then((currentUser) => {
        req.user = currentUser;
        next();
      });
    }
  );
};

export default requireLogin;
