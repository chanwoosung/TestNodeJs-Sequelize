const express=require('express');
const app=express();
const morgan=require('morgan');
const bodyParser=require('body-parser');
let port=process.env.PORT||8090;
const {sequelize}=require('./models');
const session=require('express-session');
const passport=require('passport');

const routes=require('./routes');



app.set('port',port);
app.set('views','./views');
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use('/',routes);


sequelize.sync();
app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트 활성화')
})