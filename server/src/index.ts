import express from 'express'
import cors from 'cors'
import mainRouter from './routes/main'

const port = 4000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', mainRouter)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
