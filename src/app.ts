import express from 'express'
import quotesEndpoint from './endpoints/quotesEndpoint'

const app = express()
const port = 3030

app.use(express.json())

app.use('/api', quotesEndpoint)

app.get('/test', (req, res) => {
    console.log('Test route hit');
    res.send('Test route works');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
