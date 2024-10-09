const express = require("express");
const router = express.Router();
const apiRouter = require("./api/index");

router.use("/api", apiRouter);

router.get("/", (res,req) => {
  res.send("Hello World");
})

router.get("/api/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    "XSRF-Token": csrfToken,
  });
});



module.exports = router;
