import express from "express"

import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updatedProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authmiddleware.js";
//router object
const router = express.Router();
//REGISTER
router.post("/register", registerController);
// LOGIN
router.post("/login", loginController);
//Forgot Password
router.post("/forgot-password",forgotPasswordController)
// test routes
router.get("/test", requireSignIn,testController);
//proctected route user
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected route admin
router.get("/admin-auth", requireSignIn, isAdmin,(req, res) => {
  res.status(200).send({ ok: true });
});

// updated profile
router.put('/profile',requireSignIn,updatedProfileController)

// orders
router.get('/orders', requireSignIn, getOrdersController)

// Allorders
router.get('/all-orders', requireSignIn, getAllOrdersController)

// order status update
router.put("/order-status",requireSignIn,isAdmin,orderStatusController)


export default router;




