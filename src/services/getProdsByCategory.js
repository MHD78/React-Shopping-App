import http from "./httpServices";

const getProdsByCategory = (categoryID,offset,limit)=>{
    if(offset === undefined || limit === undefined) return http.get(`/categories/${categoryID}/products`)
    else return http.get(`/categories/${categoryID}/products?offset=${offset}&limit=${limit}`)
}

export default getProdsByCategory