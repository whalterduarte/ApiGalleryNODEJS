//Libraries
import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'


//Services
const BD = require('./services/db')

//Pages
import apiRoutes from './routes/api'

dotenv.config()


const app = express()
const port = process.env.PORT

//Cors
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));


//Public
app.use(express.static(path.join(__dirname, '../public')))

//Configures middleware to parse data from POST forms
app.use(express.urlencoded({extended: true}))

//Routes
app.use(apiRoutes)
app.get('/',(req:Request, res:Response)=>{res.json({ping:'pong'})} )


//Route not found
app.use((req:Request, res:Response) =>{
  res.status(404).json({erro:'Endpoint not found'})
})


//Open server in
app.listen(port, () => console.log(`API PORT:  ${port}!`))


/* 

W   W   H   H     A      LL   TTTTT  EEEEE  RRRR
W   W   H   H    A A     LL     T    E      R   R
W W W   HHHHH   AAAAA    LL     T    EEEE   RRRR
W   W   H   H  A     A   LL     T    E      R  R
W   W   H   H A       A  LLLLL  T    EEEEE  R   R

*/ 