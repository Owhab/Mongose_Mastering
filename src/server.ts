import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';



const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Next Level Developers!')

})


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



main()
app.use(cors());
