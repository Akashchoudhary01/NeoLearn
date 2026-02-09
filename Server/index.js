import { configDotenv } from 'dotenv';
import { app } from './app.js';

configDotenv();


const PORT = process.env.PORT || 8001;

app.get("/" , (req , res)=>{
    res.send("<h1>Jai Shree Ram<h1/>")
})

app.listen(PORT , ()=>{
    console.log(`server is listning on http://localhost:${PORT}`);
    
})