import mongoose from "mongoose"

const CarDB ="mongodb://localhost/CarDataBase"

 const CarDataBase =async()=>{
try {
    const dbconnect =await mongoose.connect(CarDB)
    console.log(`connected to${dbconnect.connection.host}`)
} catch (error) {
    console.log("error occuring in database")
}

}
export default CarDataBase