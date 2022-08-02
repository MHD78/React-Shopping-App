import axios from "axios";

axios.defaults.baseURL = "https://api.escuelajs.co/api/v1/"

const http = {
    get : axios.get,
    post : axios.post,
}

export default http;