import express from "express"
import route from "./route/routesNotifikasi.js"
import mongoose from "mongoose"

const app = express()
const port = 3000

//database mongoDB
mongoose.connect("mongodb+srv://express:LGKZM1NpimG7fVkE@mycluster.pnxlz.mongodb.net/express_api?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log("Database terhubung"))
  
//aplikasi
app.use(express.static('view'))
app.use(express.json())
app.get('/', (req, res) => {
  res.sendFile('./index.html')
})
app.use("/notifikasi",route)

app.listen(port, () => {
  console.log(`aplikasi berjalan di port ${port} ( localhost:${port} )`)
})
