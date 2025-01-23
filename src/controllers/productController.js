import product from "../models/Produto.js";
import register from "../models/Users.js";

class productController {
    static async registerProduct(req, res, next) {
        const newProduct = req.body;


        if (newProduct) {
            try {
                const registredProduct = await product
                    .create(newProduct)
                res.status(200).json({ message: "Product was register with sucess", registredProduct });
            } catch (err) {
                console.log(err);
            }
        }
    }

    static async listAllProducts(req, res, next) {
        try {
            const searchProduct = product.find().populate("idUser");
            req.result = searchProduct;

            next();
        } catch (err) {
            console.log(err);

        }
    }

    static async listProducByFilter(req, res, next) {
        try {
            const search = await searchBy(req.query);

            if (search !== null) {
                const productResult = product.find(search);

                req.result = productResult;
                next();
            }
        } catch (err) {
            console.log(err);

        }
    }

    static async addToCart(req,res,next){
        try{
            const order = req.body;
            
            const findItem = await product.findById(order.idItem);
            const user = await register.findById(order.idUser) ;
            const userCart = user.shopping;
            const quantityOrder = order.quantity;

            findItem.quantity -= quantityOrder
            findItem.save();
            

            userCart.push(findItem);
            user.save();
            
            res.status(200).send("item add in your cart");

        }catch(err){
            console.log(err);
            
        }
    }
}

async function searchBy(param) {
    const { department, productName } = param;

    let search = {}

    if (department) search.department = department;
    if (productName) search.productName = { $regex: productName, $options: "i" };

    return search;

}

export default productController;