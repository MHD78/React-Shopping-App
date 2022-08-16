import http from "./httpServices";

const getAllProds = (offset,limit)=>{
    if(offset === "" || limit === "") return http.get(`/products`)
    else return http.get(`/products?offset=${offset}&limit=${limit}`)
}

export default getAllProds;