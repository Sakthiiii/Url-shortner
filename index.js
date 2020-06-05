 const express = require('express');
 const app = express();
 const connectDB = require('./config/db');

 connectDB();
 app.use(express.json({extended:false}));

//routes
app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));

const port=process.env.PORT || 3000;
app.listen(port,()=> console.log(`server running on port $(port)`));
 