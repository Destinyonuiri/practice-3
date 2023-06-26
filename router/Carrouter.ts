import { Router } from "express";
import{getAllCar,getOneCar,UpdateCar,CreatNewCar,deletngOnecar} from "../Controller/Carcontroller"

const Bookrouter = Router()
// gat all books
Bookrouter.get("/",getAllCar)

// getting single book
Bookrouter.get("/single/:bookId",getOneCar)

// creating new book
Bookrouter.post("/create",CreatNewCar)

// updating books
Bookrouter.patch("/updates/:bookId",UpdateCar)

// deleting one book
Bookrouter.delete("/delete/:bookId",deletngOnecar)

export default Bookrouter