import { Router } from "express"
import productController from "./products/products.controller"

const routes = Router()

routes.post('/product', productController.create)
routes.get('/products', productController.list)
routes.get('/product/:id', productController.find)
routes.put('/product/:id', productController.update)
routes.delete('/product/:id', productController.delete)

export default routes