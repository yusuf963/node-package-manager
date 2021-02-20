import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('node is running ')
})



const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`server upp and running on port ${port}`)
})
