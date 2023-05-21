import axios from "axios";

export const ecomerApi= axios.create({
    baseURL:'https://e-commerce-api-v2.academlo.tech/api/v1',
    headers:{
        Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo3MzMsImZpcnN0TmFtZSI6IlJvbWFyaW8iLCJsYXN0TmFtZSI6IkFyaXphIiwiZW1haWwiOiJyb21hcmlvYXJpemEyQGdtYWlsLmNvbSIsInBob25lIjoiMzIyNDY2ODM2NCIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMDdUMTk6NDc6NTYuMzY4WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMDdUMTk6NDc6NTYuMzY4WiJ9LCJpYXQiOjE2ODM0ODg4ODR9.IHpm5GW4gFdSPFE3jIK9mKC48vgHT7AQDj5GKw_7prA`
    }
})