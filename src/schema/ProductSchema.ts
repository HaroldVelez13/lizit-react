import * as yup from "yup"

const ProductSchema = yup
    .object({
        title: yup.string().required("Campo requerido"),
        category: yup.string().required("Campo requerido"),
        description: yup.string().required("Campo requerido"),
        price: yup.number().typeError('Campo requerido').min(1, "El precio debe ser al menos 1").positive("El precio debe ser un numero mayor a 0").required("Campo requerido")
    })
    .required()

export default ProductSchema