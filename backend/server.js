const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const errorHandler = require('./middleware/errorMiddleware')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/blogs', require('./routes/blogRoutes'))


app.use(errorHandler)



app.listen(port, () => console.log(`server running on port ${port} ...`))