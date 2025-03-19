export default function getUserController(req, res) {
    const {id} = req.params

    return res.json({
        id: parseInt(id),
        name: "Douglas Hiros",
        email: "k.japa@outlook.com",
        avatar: "http://github.com/DouglasHirose.png"
    })
}