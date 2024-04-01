import express from "express";
var router = express.Router();
import { signUp } from "@controllers/auth";

/* GET home page. */
router.get("/", function (req: any, res: any, next: any) {
  res.render("index", { title: "Express" });
});

router.post("/sign-up", signUp);
let indexRouter = router;
export { indexRouter };
