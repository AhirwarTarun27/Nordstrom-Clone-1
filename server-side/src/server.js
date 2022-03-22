const app=require('./index')
const connect=require('./configs/db')
require("dotenv").config();
const port = process.env.PORT || 4600;
    app.listen(port, async()=>{
        try{
            await connect();
        console.log("listening to the port 4500")
        }catch(e){
            console.log(e)
        }
    })
    
