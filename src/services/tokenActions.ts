import axios, { AxiosRequestConfig } from "axios";

const optionsGenerateAccessToken: AxiosRequestConfig = {
    method: "post",
    url: "http://localhost:9000/generateToken/",
    data: ""
}

const optionsValidateToken: AxiosRequestConfig = {
    method: "post",
    url: "http://localhost:9000/validateToken/",
    data: ""
}

const generateTokenService = async (user: any) => {
    try {
        console.log('pre validate', user)
        const data = await axios({ ...optionsGenerateAccessToken, data: user });
        return data
    } catch (err) {
        console.log('1', err)
        throw {}
    }
}

const validateToken = async (accessToken: string) => {
    try {
        const { data } = await axios({ ...optionsValidateToken, data: { accessToken } })
        console.log('validate pass response ------>  ', data)
        return data
    } catch (err) {
        console.log('validate unpass', err)
        throw err
    }
}

export default { generateTokenService, validateToken }