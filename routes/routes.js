import express from 'express'
import { insertProduct,placeOrder,getAllProducts,getAllOrders } from "../controllers/controller.js";

const router = express.Router();
router.get("/", () => {
 console.log('Hello node') 
})
router.post("/insert",insertProduct)
router.get("/all-products", getAllProducts)
router.get("/all-orders", getAllOrders);
router.post("/place-order", placeOrder);
export default router

