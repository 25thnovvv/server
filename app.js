//declare "express" framework
const express = require('express')

//declare server instance (app)
const app = express()

//declare server port
const port = process.env.PORT || 3001          //default

//declare "mongoose" library: to connect to MongoDB
const mongoose = require('mongoose')
//declare database connection string (URI) + database name
const database = "mongodb+srv://25thnovvv:_25_Nov_04@vuxphamj.t3zwk.mongodb.net/vocab-builder"     //vocab-builder: database name
//connect to database
mongoose.connect(database)
   .then(() => console.log('connect to db succeed !'))
.catch((err) => console.error('connect to db failed !' + err))

//declare "body-parser" library/package/module: to take input's value
const bodyParser = require('body-parser')
//config "body-parser"
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//declare "cors" library: to share API with "client" (front-end)
const cors = require('cors')
//enable cors : VERY IMPORTANT
app.use(cors())

//declare router (route)
const vocabRouter = require ('./routes/vocabRouter')
//register router: VERY IMPORTANT
vocabRouter(app)

app.get('/', (req, res) => {
   res.send("<h1>This is homepage of backend side</h1>")
})

//run server: listen to port
app.listen(port, () => {
   console.log('Backend server is running at http://localhost:' + port)
})