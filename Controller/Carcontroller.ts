import Carmodel from "../Carmodel/Carmodel";
import {Request,Response} from "express"


//  getting all book

export const getAllCar = async (req:Request,res:Response):Promise<Response> =>{
    try {
        const allCar = await Carmodel.find()
        return res.status(200).json({
            message:"All car available in the park",
            data: allCar
        })
    } catch (error:any) {
       return res.status(404).json({
            message:"error in getting all car",
            data:error.message
        })
        
    }
}


// creating your own books

export const CreatNewCar = async(req:Request,res:Response):Promise<Response> =>{
    try {

        const {brand,color,price,details}= req.body
         const CreatCar = await Carmodel.create({
        brand,color,price,details
        })
        return res.status(201).json({
            message:"car Created sucessfully",
            data:CreatCar
        })
    } catch (error:any) {
        return res.status(404).json({
            message:"error creating car",
            data:error.message
        })
        
    }
}

// updating of books

export const UpdateCar = async (req:Request,res:Response):Promise<Response> =>{
    try {
        const {price} =req.body
        const UpdatesomeCar = await Carmodel.findByIdAndUpdate(req.params.carIdId,{price},{new:true})
        return res.status(201).json({
            message:"car updated",
            data:UpdatesomeCar
        })
    } catch (error:any) {
        return res.status(404).json({
            message:"error Updating car",
            data:error.message

    })
}}


// getting one book
export const getOneCar = async(req:Request,res:Response):Promise<Response> =>{
    try {
        const getCar = await Carmodel.findById(req.params.carId)
        return res.status(200).json({
            message:"here is ur car",
            data:getCar
        })
    } catch (error:any) {
        return res.status(404).json({
            Message:"error in gettng a car",
            data: error.message
    })
    }
    }
// deleting a car

export const deletngOnecar = async(req:Request,res:Response):Promise<Response> =>{
    try {
        const DeletCar = await Carmodel.findByIdAndDelete(req.params.carId)
        return res.status(200).json({
            message:"One Car Deleted sucessfully",
            data:DeletCar
        })
    } catch (error) {
        return res.status(404).json({
            message:"error deleting a car ",
            data:error.message
        })
        
    }
}
// export default {deletngOnecar,getOneCar,UpdateCar,CreatNewCar}
