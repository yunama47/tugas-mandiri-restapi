import notifikasi from "../models/modelNotifikasi.js";

export const getNotifs = async(req,res) =>{
    try{
        const notification = await notifikasi.find()
        res.status(200).json(notification)
    }catch (error){
        res.status(400).json({message:error.message})
    }
}
export const getNotifsID = async(req,res) =>{
    try{
        const notification = await notifikasi.findById(req.params.id)
        res.status(200).json(notification)
    }catch (error){
        res.status(400).json({message:error.message})
    }
}
export const saveNotifs = async(req,res) =>{
    const notification = new notifikasi(req.body)
    try{
        const status = await notification.save()
        res.status(201).json(status)
    }catch (error){
        res.status(400).json({message:error.message})
    }
}
export const updateNotifs = async(req,res) =>{
    var notifID = await notifikasi.findById(req.params.id)
    if(!notifID) return res.status(404).json({message:"Data tidak ditemukan"})
    try{
        const update = await notifikasi.updateOne({_id:req.params.id},{$set:req.body})
        res.status(200).json(update)
    }catch (error){
        res.status(400).json({message:error.message})
    }
}
export const delNotifs = async(req,res) =>{
    if(!(req.params.id)) return res.status(404).json({message:"Data tidak ditemukan"})
    // var notifID = await notifikasi.findById(req.params.id)
    try{
        const del = await notifikasi.deleteOne({_id:req.params.id})
        res.status(200).json(del)
    }catch (error){
        res.status(400).json({message:error.message})
    }
}