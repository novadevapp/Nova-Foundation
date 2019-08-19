const router = require("express").Router();

const register = require("./signup");
const pictures = require("./picture");
const checkLogin = require("./checkLogin");
const PostThoughts = require("./thoughts");
const authenticate = require("../middlewares/authenticate");
const login = require("./login");

router.use("/register", register);
// router.use('/login', login);

// Unlock Cookie Middleware
router.use(authenticate);
router.get("/login-status", checkLogin);
router.use("/status", PostThoughts);
router.use(pictures);

module.exports = router;
