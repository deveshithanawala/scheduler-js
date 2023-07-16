const connectDB = require('./server/db/connect');
const express = require('express');
const app = express();
const events = require('./server/routes/events');
require('dotenv').config();

app.use(express.json());

app.get("/api/v1/calendar",(req,res)=>{

    res.send("This is the home page")
});

app.use("/api/v1/events", events)

const port = 6000;

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening at port ${port}...`));
    }catch(error){
        console.log(error);

    }

}

start()