//const express = require('express')

import express from "express"
import user_router from "./routers/user_router.js"
import product_router from "./routers/product_router.js"
import cors from 'cors';

const app = express()
const port = 3000

// Middleware
app.use(cors())
app.use(express.json()) // faz o parse do json e transforma em objeto no req.body

app.use("/user", user_router)
app.use("/product", user_router)

app.listen(port, () => {
  console.log(`Servidor rodando em http:/localhost:${port}`)
})