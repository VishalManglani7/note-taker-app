const router = require("express").Router()
const noteRoutes = require("./noteRoutes")
const apiMiddleware = (req,res,next) => {
    console.log("YOU'RE HITTING AN API ROUTE!")
    next()
}

router.use(apiMiddleware)

router.use("/notes", noteRoutes)

module.exports = router