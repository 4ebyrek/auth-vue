import {request} from "@/util/api";

export default {
    login(formData) {
        return request('POST', 'http://localhost:8081/login', formData)
    },
    getAllEmployes() {
        return request('GET', 'http://localhost:8081/api/v1/employees');
    }
}