import mongoose from "mongoose";
const BusSchema=mongoose.Schema({

    busId:{
        type:String,
        required:true,
    },
    day:{
        type:String,
        required:true,
    },
    busFi:{
        type:String,
        required:true,
    },
    busS:{
        type:String,
        required:true,
    },
    busT:{
        type:String,
        required:true,
    },
    busFo:{
        type:String,
        required:true,
    },
});
const BusModel=mongoose.model("housinginfos",BusSchema);
export default BusModel;


