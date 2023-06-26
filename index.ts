import express,{Request,Response} from "express";
import CarDataBase from "./Config/Database"
import  cars from "./router/Carrouter"

const port = 2000
const app = express()
app.use(express.json())
.use("/api/cars",cars)

app.get("/",(req:Request,res:Response)=>{
    try {
      return res.status(200).json({
        message:"server connected",
    })
    } catch (error) {
        return res.status(404).json({
            message:"error in connecting to server"
        })
    }
})

CarDataBase()

app.listen(port,()=>{
    console.log("")
    console.log("server is on")
})
