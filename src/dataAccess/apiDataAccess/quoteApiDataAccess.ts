import { QuoteDataAccess } from '../quoteDataAccess'
import { apiDataAccess } from './apiDataAccess'

class QuoteApiDataAccess implements QuoteDataAccess {
    
    public async getRandomQuoteAsync(limit: number = 1): Promise<any> {
        return apiDataAccess.getAsync('quotes/random', { limit })
    }

}

export const quoteApiDataAccess: QuoteDataAccess = new QuoteApiDataAccess()