import { list } from "../../models/productModel.js"

export default async function listUserController(req, res) {

    const result = await list()

    return res.json(result)
}