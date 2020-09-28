const express = require('express')
const port = 3000
const app = express()
const routes = require('./routes/todos.js')
const { errorHandler } = require('./middlewares/errorHandler.js')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/todos', routes)
// app.use(errorHandler)

app.listen(port, () => {
  console.log(`app is running at port ${port}`)
})