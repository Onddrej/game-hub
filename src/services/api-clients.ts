import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fb4bfd47ebce467fb628135beb999b68'
    }
})
 