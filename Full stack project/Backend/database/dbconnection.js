import mongoose from "mongoose";

export const dbconnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"RESTURENT"
    }).then(()=>{
        console.log("connected to database")
    }).catch((err)=>{
        console.log(`some error connected to data base ${err} `)
    })
}