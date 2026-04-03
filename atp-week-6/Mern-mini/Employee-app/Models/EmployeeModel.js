import { Schema,model } from "mongoose";

const EmpSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is Required feild']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:[true,'email already exists']
    },
    mobile:{
        type:Number,
        required:[true,'Mobile number is required']
    },
    designation:{
        type:String,
        required:[true,'Desifnation is required']
    },
    companyName:{
        type:String,
        required:[true,'Desifnation is required']
    },

},{
    timestamps:true,
    versionKey:false,
    strict:"throw"
})

export const EmployeeModel = model("Employee",EmpSchema)