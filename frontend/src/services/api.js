import axios from "axios";

const API = axios.create({

    baseURL: "https://helpdesk-api-oalt.onrender.com"

});

export default API;