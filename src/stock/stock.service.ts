import  StockModel  from "./stock.schema"

export class StockService {
    async create(products: Object) {
        try {
            console.log(products)
            const createdStock = await StockModel.createCollection(products) 
            return createdStock
        } catch (err) {
            console.error('Error: ', err) ;      
        }
        
    }
}