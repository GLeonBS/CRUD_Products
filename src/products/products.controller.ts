import { Request, Response } from 'express'
import { ProductService } from './product.service'

export class ProductController {
    async create(req: Request, res: Response) {
        const product = await new ProductService().create(req.body)

        return res.status(200).json(product)
    }

    async list(req: Request, res: Response) {
        const products = await new ProductService().list()

        return res.status(200).json(products)
    }
    
    async find(req: Request, res: Response) {
        const product = await new ProductService().find(req.params.id)

        return res.status(200).json(product)
    }

    async update(req: Request, res: Response) {
        const product = await new ProductService().update(req.params.id, req.body)

        return res.status(200).json(product)
    }


    async delete(req: Request, res: Response) {
        const product = await new ProductService().delete(req.params.id)

        return res.status(200).json("Sucessfuly deleted product!!")
    }

    async randomizeItems(req: Request, res: Response) {
        const product = await new ProductService().randomize()
        

        return res.status(200).json(product)
    }

    async writeProducts(req: Request, res: Response) {
        const products = await new ProductService().writeProducts()
        

        return res.status(200).json(products)
    }

    async readProducts(req: Request, res: Response) {
        const products = await new ProductService().readProducts()
        

        return res.status(200).json(products)
    }
}

export default new ProductController()