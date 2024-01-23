import express from 'express'
import quotesEndpoint from './endpoints/quotesEndpoint'

const app = express()
const port = 3030

app.use(express.json())

app.use('/api', quotesEndpoint)

app.listen(port, () => {
    console.log(`API is running on port ${port}`)
});
