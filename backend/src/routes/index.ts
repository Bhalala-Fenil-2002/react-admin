import express from "express";
const router = express.Router();
import { signUp, signIn } from "@controllers/auth";

/* GET home page. */
router.get("/", function (req: any, res: any, next: any) {
  res.render("index", { title: "Express" });
});

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);

let indexRouter = router;
export {indexRouter};