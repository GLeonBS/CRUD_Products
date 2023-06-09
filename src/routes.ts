import { Router } from "express"
import productController from "./products/products.controller"
import stockController from "./stock/stock.controller"

const routes = Router()

routes.post('/product', productController.create)
routes.get('/products', productController.list)
routes.get('/product/:id', productController.find)
routes.put('/product/:id', productController.update)
routes.delete('/product/:id', productController.delete)
routes.post('/stock', stockController.create)
routes.post('/random-products', productController.randomizeItems)
routes.get('/stock/total', stockController.getTotalStock)
routes.post('/products/createFile', productController.writeProducts)
routes.get('/products/readFile', productController.readProducts)

export default routes