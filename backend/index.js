const express = require("express");
const app = express();



app.listen(4000,()=>{
    console.log("your server on 4000 has started!!");
});


app.get("/",(req,res)=>{
    const {lang, code} = req.body
    return res.json({lang,code});
});