import * as yup from "yup"

const ProductSchema = yup
    .object({
        title: yup.string().required(),
        category: yup.string().required(),
        description: yup.string().required(),
        price: yup.number().positive().integer().required()
    })
    .required()

export default ProductSchema