import axios, {AxiosRequestConfig} from "axios";
import {CreateAxiosDefaults, AxiosInstance} from "axios";

export class APIService {
    private instance: AxiosInstance;

    constructor(config: CreateAxiosDefaults) {
        this.instance = axios.create({...config})
    }

    get(url, config?: AxiosRequestConfig) {
        return this.instance.get(url, {...config})
    }

    post(url, data, config?: AxiosRequestConfig) {
        return this.instance.post(url, data, {...config})
    }

    delete(url, config?: AxiosRequestConfig) {
        return this.instance.delete(url, {...config})
    }

    update(url, config?: AxiosRequestConfig) {
        return this.instance.options(url, {...config})
    }
}

