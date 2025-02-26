//const express = require('express')

import express from "express"
import user_router from "./routers/user_router.js"
import product_router from "./routers/product_router.js"

const app = express()
const port = 3000

app.use("/user", user_router)
app.use("/product", user_router)

app.listen(port, () => {
  console.log(`Servidor rodando em http:/localhost:${port}`)
})