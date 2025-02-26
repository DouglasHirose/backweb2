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
      message: "Cadastro criado com sucesso!",
      user: {
      addres: "R. Quatorze, n° 29, Jardim São Paulo, São Paulo - SP",
      property: "Douglas Hirose",
      maps: "https://maps.app.goo.gl/zsjaWaiHVVy9QCof9"
      }
    })
  })
  
router.put("/", (req, res) => {
    res.json({
      message: "Cadastro substituido com sucesso!",
      user: {
        addres: "R. Quatorze, n° 29, Sapê, Ubatuba - SP",
        property: "Douglas Kaoru Hirose",
        maps: "https://maps.app.goo.gl/xmU7HwboLgieXtSV7"
        }
      })
    })
  
router.delete("/", (req, res) => {
    res.json({
      message: "Cadastro deletado com sucesso!",
      user: {
        addres: "R. Quatorze, n° 29, Sapê, Ubatuba - SP",
        property: "Douglas Kaoru Hirose",
        maps: "https://maps.app.goo.gl/xmU7HwboLgieXtSV7"
        }
      })
    })
  
router.patch("/", (req, res) => {
    res.json({
      message: "Cadastro atualizado com sucesso!",
      user: {
        property: "Douglas Kaoru Hirose"
      }
    })
  })

  export default router