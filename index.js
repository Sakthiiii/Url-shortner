 const express = require('express');
 const app = express();
 const connectDB = require('./config/db');

 connectDB();
 app.use(express.json({extended:false}));

//routes
app.get("/",function(req,res){
    res.render("index.ejs");
});
var indexRoute= require("./routes/index");
//app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));
app.use(indexRoute);
const port=process.env.PORT || 3000;
app.listen(port,()=> console.log(`server running on port $(port)`));
 