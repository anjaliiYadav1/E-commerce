import axios from "axios";

const example = axios.create({
    //cloud function url api
    baseURL: 'http://localhost:5001/clone-9e22d/us-central1/api'

});

export default example;