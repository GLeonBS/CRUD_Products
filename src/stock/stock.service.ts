import  StockModel  from "./stock.schema"
import { ProductService } from '../products/product.service'

export class StockService {
    async create() {
        try {
            const products = (await new ProductService().list()).map(data => {
                const collect = {
                    'name' : data.name,
                    'quantity': data.quantity,
                    'price': data.price,
                    'stockValue': (data.quantity * data.price)
                }
                return collect
            })
            const createdStock = await StockModel.create(products) 
            return createdStock;
            
        } catch (err) {
            console.error('Error: ', err) ;      
        }
        
    }

    async list() {
        const listedStock = await StockModel.find()

        return listedStock
    }

    async getTotal() {
        try {
            const products = await this.list()
            const total = products.reduce((acc, atual) => {
                return acc + atual.stockValue
            }, 0).toFixed(2)

            return total
            
        } catch (err) {
            console.error('Error: ', err) ;      
        }
        
    }
}