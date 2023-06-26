import mongoose from "mongoose"
import {iCar} from "../interfaces/Carinterface"
interface car extends iCar ,mongoose.Document{}

const carschema = new mongoose.Schema<iCar>({
    brand:{
        type: String,
        required:[true,"please enter a title"]
    },
    color:{
        type: String,
    },
    price:{
        type: Number,
    },
    details:{
        type: String,
    },
})
const Carmodel = mongoose.model<car>("car",carschema )

export default Carmodel
