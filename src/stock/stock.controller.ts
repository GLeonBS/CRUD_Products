import { Request, Response } from 'express'
import { StockService } from './stock.service'
import { ProductService } from '../products/product.service'

export class StockController {
    async create(req: Request, res: Response) {
        const listedProducts = new ProductService()
        const stock = await new StockService().create(await listedProducts.list())
        return res.status(200).json(stock)
    }
}

export default new StockController()