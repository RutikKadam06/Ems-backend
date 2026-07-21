import state from "../models/State.js"


export const CreateState = async(req , res)=>{
    try {
        const {name}= req.body
        const State = await state.create({name})
        if(!State){
            return res.status(400).json({message:"state not found"})
        }
        return res.status(201).json({message:"state created successfully"})
    } catch (error) {
        return res.status(500).json({message:"internal server error"})
    }
}

export const getState = async(req,res)=>{
    try {
        const State = await state.find()
        if(!State){
            return res.status(400).json({message:"state not found"})
        }
        return res.status(200).json({message:"state found successfully", State})

    } catch {
        return res.status(500).json({message:"internal server error"})
        
    }
}
