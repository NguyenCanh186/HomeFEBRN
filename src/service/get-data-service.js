import axios from "axios"
export class GetDataService {
    static serverURL = `http://localhost:8080`

    static getNews() {
        return axios.get(`${this.serverURL}/get-data/news`)
    }
    static getNewsById(id) {
        return axios.get(`${this.serverURL}/get-data/news/${id}`)
    }

    static sendMail() {
        return axios.post(`${this.serverURL}/get-data/sendMail`)
    }
}
