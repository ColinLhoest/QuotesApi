import axios, { AxiosRequestConfig, Method } from 'axios'
import { DataAccess } from '../dataAccess'
import { URI_API_BASE } from '../../constants'

class ApiDataAccess implements DataAccess {
    public async getAsync(uri: string, params: any = null): Promise<any> {
        return this.requestAsync('GET', uri, null, params)
    }

    public async postAsync(uri: string): Promise<any> {
        throw new Error('Method not implemented.')
    }

    public async putAsync(uri: string): Promise<any> {
        throw new Error('Method not implemented.')
    }

    public async deleteAsync(uri: string): Promise<any> {
        throw new Error('Method not implemented.')
    }

    private async requestAsync(method: Method, url: string, data: any = null, params: any = null): Promise<any> {
        const uri: string = `${URI_API_BASE}${url}`

        const config: AxiosRequestConfig = {
            method: method,
            url: uri,
            params: params,
            data: data
        }

        const response = await axios(config)
        
        return response.data
    }
}

export const apiDataAccess: DataAccess = new ApiDataAccess()
