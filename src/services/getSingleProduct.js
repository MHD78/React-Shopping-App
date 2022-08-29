import http from "./httpServices";

const getSingleProduct = id=>{
    return http.get(`/products/${id}`)
}

export default getSingleProduct;