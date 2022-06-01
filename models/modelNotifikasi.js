import mongoose from "mongoose";

const Notifikasi = mongoose.Schema({
    judul:{
        type: String,
        require: true
    },
    pesan:{
        type: String,
        require: true
    },
    link_ref:{
        type: String,
    },
},{
    timestamps: true
})

export default mongoose.model("Notifikasi",Notifikasi)