const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const projectSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        default:'misc'
    },
    description:{
        type:String,
    },
    free:{
        type:Boolean,
        require:true
    },
    price:{
        type:Number,
        default:'0'
    },
    technology:{
        type:Object
    },
    video_link_free:{
        type:String
    },
    //link available after purchase
    video_link_paid:{
        type:String
    },
    synopsis:{
        type:Buffer
    },
    //available after purchase
    full_report:{
        type:Buffer
    },
    //paid user list is maitained for users who bought the course
    paid_user:{
        type:Array
    }
})
module.exports=mongoose.model('Project',projectSchema);