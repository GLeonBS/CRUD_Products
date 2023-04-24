import { Request, Response } from 'express'
import { StockService } from './stock.service'
import { ProductService } from '../products/product.service'

export class StockController {
    async create(req: Request, res: Response) {
        const stock = await new StockService().create()
        return res.status(200).json(stock)
    }

    async getTotalStock(req: Request, res: Response) {
        const total = await new StockService().getTotal()

        return res.status(200).json(total)
    }
}

export default new StockController()