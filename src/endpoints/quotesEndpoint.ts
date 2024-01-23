
import { Request, Response } from 'express'
import { BackendException } from '../exceptions/backendException'

import router from '../router'
import { quotesService } from '../services/quotesService'

/**
 * 
 */
router.get('/quotes/:limit?', async (req: Request, res: Response) => {
    try {
        const limit = req.params.limit ?? 1
        
        const quotes: string = await quotesService.getRamdomQuoteAsync(req.url, {limit: limit })

        res.send(quotes)
    } catch (error) {
        throw new BackendException('Access Denied')
    }
})

export default router