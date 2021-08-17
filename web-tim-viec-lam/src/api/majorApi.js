import axios from "axios";

const majorApi = {
    getAll:  async () => {
        const url = "/major/get-all-major"
        return await axios.get(url);
    }
}

export default majorApi;