import * as Yup from "yup"

export const checkoutValidationSchema = Yup.object({
    name: Yup.string().required("Campo requerido"),
    cellphone: Yup.string().required("Campo requerido"),
    address: Yup.string().required("Campo requerido"),
    location: Yup.string().required("Campo requerido"),
})

export const registerValidationSchema = Yup.object({
    name: Yup.string().required("Campo requerido"),
    email: Yup.string().email("Email válido").required("Campo requerido"),
    password: Yup.string()
        .min(6, "6 caracteres mínimo")
        .required("Campo requerido")
})

export const loginValidationSchema = Yup.object({
    email: Yup.string().email("Email válido").required("Campo requerido"),
    password: Yup.string()
        .min(6, "6 caracteres mínimo")
        .required("Campo requerido")
})