import { Service } from './service'

class QuotesService extends Service {

    public async getRamdomQuoteAsync(uri: string, params: any): Promise<string> {
        const reponses: any[] = await this.dataAccess.getAsync('quotes/random', params)
        const quotes: string[] = reponses.map(quote => quote["content"])

        return this.formatRetrievedQuotes(quotes)
    }

    private formatRetrievedQuotes(quotes: string[]): string {
        quotes = quotes.map(quote => `→ ${quote}`)

        const formattedQuotes: string = quotes.join('\n')

        return formattedQuotes
    }
}

export const quotesService: QuotesService = new QuotesService()