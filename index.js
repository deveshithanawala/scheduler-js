const express = require('express');
const app = express();
const events = require('./server/routes/events');

app.use(express.json())

app.get("/api/v1/calendar",(req,res)=>{

    res.send("This is the home page")
});

app.use("/api/v1/events", events)

const port = 6000;
app.listen(port,console.log(`App is listening at port ${port}....`));