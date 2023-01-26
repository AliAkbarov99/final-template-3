const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
app.use(express())
app.use(cors())

const PORT = 8080
app.use(express.json())

mongoose.set('strictQuery',false)
mongoose.connect("mongodb+srv://nft-marketplace:bi3A8FulfZWxQuzI@cluster0.xtvensf.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Connected MongoDB");
}).catch((error)=>{
    console.log({error});
})

const TeacherSchema = new mongoose.Schema({
    name: String,
    subject: String,
    description:String
})

const TeacherModel = new mongoose.model("Teacher",TeacherSchema)

//POST
app.post("/api/teachers",(req,res)=>{
    let newTeacher = new TeacherModel({
        ...req.body
    })

    newTeacher.save()
    res.send({message:"Teacher added!",newTeacher})
    console.log("asdadsa");
})

//GET
app.get("/api/teachers",(req,res)=>{
    TeacherModel.find(null,"name subject description").exec((error,data)=>{
        if(error) return res.send({error})
        else{
            res.send(data)
        }
    })
})

//DELETE
app.delete("/api/teachers/:id",(req,res)=>{
    TeacherModel.findByIdAndDelete(req.params.id,(error,data)=>{
        if(error){
            console.log(error);
        }
        
        res.send({message:"Deleted : ",data});
    })
})


//GET FOR ID

app.get("/api/teachers/:id",(req,res)=>{
    TeacherModel.findById(req.params.id).exec((error,teacher)=>{
        if(error) return res.send({error})
        res.send(teacher)
    })
})

app.listen(PORT,()=>{
    console.log("Server running on :" ,PORT);
})

