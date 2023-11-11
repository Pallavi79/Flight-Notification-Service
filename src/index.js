const express = require('express');
const {ServerConfig, Logger} = require('./config');
const apiRoutes = require('./routes');

const app = express();
const mailsender=require('./config/email-config');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, async()=>{
    console.log(`Successfully started the server on port ${ServerConfig.PORT}`);
    //Logger.info("Successfully started the server",{});

    try{
        const response = await mailsender.sendMail({
            from:ServerConfig.GMAIL_EMAIL,
            to:'itspallavi50@gmail.com',
            subject:'service working?',
            text:'Yes it is working'
        });
        console.log(response);

    }catch(error){
        console.log(error);
    }
});