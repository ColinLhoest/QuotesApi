import { Service } from './service'

class QuotesService extends Service {

    public async getRamdomQuoteAsync(uri: string, params: any): Promise<any> {
        return await this.dataAccess.getAsync(uri, params)
    }
}

export const quotesService: QuotesService = new QuotesService()