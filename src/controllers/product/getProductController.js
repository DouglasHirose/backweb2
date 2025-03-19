export default function getProductController(req, res) {
    return res.json({
        id: 1,
        tipo: "Aluguel",
        endereco: "Rua Corenel Aristides, 27",
        quartos: 3,
        propriedade: "Casa"
    })
}