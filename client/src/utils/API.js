import axios from "axios";

export default {
    search: function (title) {
        // This will be a make a GET request with axios to /api/members
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
    }
};