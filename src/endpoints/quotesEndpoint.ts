
import { Request, Response } from 'express'
import { BackEndException } from '../exceptions/backEndException'

import router from '../router'
import { quotesService } from '../services/quotesService'

/**
 * 
 */
router.get('/quotes/random/:limit?', async (req: Request, res: Response) => {
    console.log('mtn')
    try {
        const limit = req.params.limit
        
        const quotes: any = await quotesService.getRamdomQuoteAsync(req.url, limit)

        res.send(quotes)
    } catch (error) {
        console.log(error)
        throw new BackEndException('Access Denied')
    }
})

export default router