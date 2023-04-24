import { ProductTypes } from "./types/products.types" 
import  ProductModel  from "./products.schema"

export class ProductService {
    async create(product: ProductTypes) {
        const createdProduct = await ProductModel.create(product)

        return createdProduct
    }

    async list() {
        const listedProduct = await ProductModel.find()

        return listedProduct
    }

    async find(id) {
        const findedProduct = await ProductModel.findById(id)

        return findedProduct
    }

    async update(id, dataToUpdate : ProductTypes) {
        const updatedProduct = await ProductModel.findOneAndUpdate({_id: id}, {
            name : dataToUpdate.name,
            quantity : dataToUpdate.quantity,
            price : dataToUpdate.price,
            purchaseDate : dataToUpdate.purchaseDate,
            deliveryDate : dataToUpdate.deliveryDate
        }, {new : true})

        return updatedProduct
    }


    async delete(id) {
        await ProductModel.findOneAndDelete({_id: id})
        return
    }

    async randomize() {
        const items = await ProductModel.aggregate([{$sample: {size: 4}}])

        return items
    }
}