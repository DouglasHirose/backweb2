import { create } from "../../models/productModel.js";

export default async function createProductController(req, res) {
    const product = req.body

    //TODO validar e inserir no BD
    const result = await create(product)

    return res.json({
        message: "Imóvel criado com sucesso!",
        property: property
    })
}