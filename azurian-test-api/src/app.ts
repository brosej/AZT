import * as express from 'express';
import { getConnection } from './config/mysqlcon';
import routes from './routes/index'
import * as bodyParser from 'body-parser';
import * as cors from 'cors'
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended:false })
const jsonParser = bodyParser.json();

app.listen(3000, ()=> {
    console.log("Server running on port 3000")
})

app.use(urlencodedParser)
app.use(jsonParser)
app.use( async (req:any, res, next) =>{
    const con = await getConnection()
    req.con = con
    next()
})
app.use(cors())
app.use(routes)

