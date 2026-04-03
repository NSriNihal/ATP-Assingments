import exp from 'express'

import { EmployeeModel } from '../Models/EmployeeModel.js'

export const employeeApp  = exp.Router()
employeeApp.post("/employee",async(req,res)=>{
    const newEmp = req.body
    const newEmpDoc = new EmployeeModel(newEmp)
    await newEmpDoc.save()
    res.status(201).json({message:"New Employee is created"})
})

employeeApp.get('/employee',async(req,res)=>{
    const employeeList = await EmployeeModel.find()
    res.status(200).json({message:"Employees",payload:employeeList})
})

employeeApp.put("/employee/:id",async(req,res)=>{
    const modedemp = req.body
    const eid = req.params.id

    const updatedEmployee = await EmployeeModel.findByIdAndUpdate(eid,{$set:{...modedemp}},{returnDocument:"after",runValidators:true})
    res.status(200).json({message:"User Updated",payload:updatedEmployee})
})

employeeApp.delete("/employee/:id",async(req,res)=>{
    const eid = req.params.id

    let deletedEmployee = await EmployeeModel.findByIdAndDelete(eid)
    if(!deletedEmployee){
        return res.status(404).json({message:"Employee not found"})
    }
    res.status(200).json({message:"Employee Deleted",payload:deletedEmployee})

})