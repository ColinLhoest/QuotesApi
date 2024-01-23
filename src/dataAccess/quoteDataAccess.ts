export interface QuoteDataAccess {
    getRandomQuoteAsync(limit: number): Promise<any>
}