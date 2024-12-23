import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { getCompany, getCompanyById, registerComapny, updateComapny } from "../controllers/company.controller..js";


const router = express.Router();

router.route("/register").post(isAuthenticated,registerComapny);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated,updateComapny);

export default router;