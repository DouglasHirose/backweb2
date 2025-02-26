import express from 'express'

const router = express.Router()

router.get("/", (req, res) => {
    res.json({
      name: "Douglas Hirose",
      email: "k.japa@outlook.com",
      avatar: "http://github.com/douglashirose.png"
    })
  })
  
router.post("/", (req, res) => {
    res.json({
      message: "Usuário criado com sucesso!",
      user: {
      name: "Douglas Hirose",
      email: "k.japa@outlook.com",
      avatar: "http://github.com/douglashirose.png"
      }
    })
  })
  
router.put("/", (req, res) => {
    res.json({
      message: "Usuário substituido com sucesso!",
      user: {
        name: "Douglas Hirose Cecilia",
        email: "k.japa@outlook.com",
        avatar: "http://github.com/douglashirose.png"
      }
    })
  })
  
router.delete("/", (req, res) => {
    res.json({
      message: "Usuário deletado com sucesso!",
      user: {
        name: "Douglas Hirose Cecilia",
        email: "k.japa@outlook.com",
        avatar: "http://github.com/douglashirose.png"
      }
    })
  })
  
router.patch("/", (req, res) => {
    res.json({
      message: "Usuário atualizado com sucesso!",
      user: {
        name: "Douglas Kaoru Hirose"
      }
    })
  })

  export default router