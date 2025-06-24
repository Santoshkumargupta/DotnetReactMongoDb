import axios from "axios";

const API = axios.create({
    baseURL:"https://localhost:7284/api/",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
    },
});

export default API