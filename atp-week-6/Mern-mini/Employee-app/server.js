import exp from 'express'
import {config} from 'dotenv'
import {connect} from 'mongoose'
import { employeeApp } from './APIs/employAPI.js'
import cors from 'cors'

const app = exp()
app.use(cors({
    origin:['http://localhost:5173']
}))

config()

app.use(exp.json()) //body parser middleware

app.use('/employee-api',employeeApp);

const connectDB = async()=>{
    try{
        await connect(process.env.DB_URL)
        console.log("DB server is connected")
        const port = process.env.PORT || 5000
        app.listen(port,()=>console.log(`Server listining on ${port}...`))
    }catch(err){
        console.log("unable to connect",err)
    }
}
connectDB()

app.use((req,res,next)=>{
    res.status(404).json({message:`path ${req.url} is invalid`})
})
