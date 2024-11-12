const  express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/auth');

require('dotenv').config()
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRouter);

mongoose.connect(process.env.DB_HOST).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server started on port ${process.env.PORT}`);
    })
}).catch(err => console.log(err));
