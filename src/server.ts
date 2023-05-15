import mongoose from 'mongoose';
import app from './app'



const port : number = 3000

async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("Successfully Connected to the database")
        // Listening server after connecting to the database
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
    catch(err){
        console.log("Failed to connect to the database", err);
    }
  
  }

main();
