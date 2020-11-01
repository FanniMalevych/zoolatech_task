import axios from "axios";

export default function getData(url, func){
    axios.get(url)
        .then(res => {
            func(res.data)
        })
        .catch(error => console.log(error))
}