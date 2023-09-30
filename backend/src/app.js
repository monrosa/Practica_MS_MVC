const express=require('express');
const morgan=require('morgan');
const cors = require('cors'); //en el app.js

const app=express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:4200'}));
// app.use(setCurrentUser);
// app.use(MongooseSingleton());
//settings
app.set('puerto',process.env.PORT|| 3000);
app.set('nombreApp','Gestión de empleados');
app.use('/api/empleados',require('./routes/empleados.routes'));

module.exports=app;