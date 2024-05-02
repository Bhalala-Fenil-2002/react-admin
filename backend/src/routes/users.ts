import express from "express";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req: any, res: any, next: any) {
  res.send("respond with a resource");
});

let usersRouter = router;
export { usersRouter };
