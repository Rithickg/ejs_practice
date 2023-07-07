const express = require("express")
const app = express()
const dotenv = require("dotenv")
const viewEngineRoute = require("./routes/viewEngine")

dotenv.config()
let port = process.env.PORT || 2002
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware for static file 
app.use(express.static('public'))

// Register view engine 
app.set('view engine', 'ejs')


app.use('/api', viewEngineRoute)

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})