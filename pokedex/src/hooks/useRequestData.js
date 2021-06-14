import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

const useRequestData = ((url) => {
    axios.get(`${BASE_URL}/${url}`)
    .then((res) => {
        console.log(res)
    })
})