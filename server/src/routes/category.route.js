import { Router } from "express";
import { fetchCategory, registerCategory } from "../controllers/category.controller.js";
import cache from "../middllewares/cache.js";

const categoryRouter=Router()

categoryRouter.post("/register",registerCategory)
categoryRouter.get("/get-categories",cache(600),fetchCategory)

export default categoryRouter