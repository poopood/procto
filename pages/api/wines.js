import products from "../../data";


export default function handler(req, res) {
    res.json(products)
}
