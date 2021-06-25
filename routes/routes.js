import express from 'express'
// import {} from "../controllers/controller.js";

const router = express.Router();
router.get("/", () => {
 console.log('Hello node') 
})


export default router

