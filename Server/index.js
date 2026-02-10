import { configDotenv } from 'dotenv';
import { app } from './app.js';
import { connectionToDB } from './config/dbConnection.js';
configDotenv();
const PORT = process.env.PORT || 8001;
app.listen(PORT ,async()=>{
     await connectionToDB();
   
    console.log(`server is listning on http://localhost:${PORT}`);
    
})